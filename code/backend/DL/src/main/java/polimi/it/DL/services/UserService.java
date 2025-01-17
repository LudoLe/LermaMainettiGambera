package polimi.it.DL.services;

import polimi.it.DL.entities.Ticket;
import polimi.it.DL.entities.User;
import org.springframework.security.crypto.argon2.Argon2PasswordEncoder;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;


@Stateless(name= "services/UserService")
public class UserService {

    boolean test = false;

    // parameters set to low values, it is an unsafe solution, but this way login is faster
    private static final int ARGON2_ITERATIONS = 2;
    private static final int ARGON2_MEMORY = 16384;
    private static final int ARGON2_PARALLELISM = 1;
    private static final int ARGON2_SALT_LENGTH = 64;
    private static final int ARGON2_HASH_LENGTH = 128;

    @PersistenceContext(unitName = "clup")
    private EntityManager em;

    //check if a user exists
    public User userExists(String username) throws Exception {
        User user;
        user = em.createNamedQuery("User.findByUsername", User.class).setParameter(1, username).getResultList().stream().findFirst().orElse(null);
        return user;
    }

    public void invalidateSessionToken(String username){
        User user = em.createNamedQuery("User.findByUsername", User.class).setParameter(1, username).getResultList().stream().findFirst().orElse(null);
        if(!(user == null)){
            user.setSessionToken(null);
            em.flush();
        }
    }

    public String newSessionToken(String username){
        User user = em.createNamedQuery("User.findByUsername", User.class).setParameter(1, username).getResultList().stream().findFirst().orElse(null);
        if(!(user == null)){
                String newSessionToken = generateSessionToken();
                user.setSessionToken(newSessionToken);
                em.flush();
                em.merge(user);
            return newSessionToken;
        }
        System.out.println("user not found in check session token");
        return null;
        }

    public void logOut(String username) throws Exception{
           User user = em.createNamedQuery("User.findByUsername", User.class).setParameter(1, username).getResultList().stream().findFirst().orElse(null);
           if(user!=null) {
               user.setSessionToken(null);
               em.flush();
           }
    }

    public boolean isManager(String token) throws Exception {
        User user = em.createNamedQuery("User.findByToken", User.class).setParameter(1, token).getResultList().stream().findFirst().orElse(null);
       if(user!=null) {
           return user.getIsManager();
       }
       else {
           return false;
       }
    }

    public Boolean isAuthorized(String username, String token) throws Exception{
        User user = em.createNamedQuery("User.findByToken", User.class).setParameter(1, token).getResultList().stream().findFirst().orElse(null);;
        System.out.println("USER TOKEN IS: " + token);
        System.out.println("USERNAME IS: " + username);
        if(user!=null){
            if(user.getUsername().equals(username)){
                System.out.println("USER FOUND");
                return true;
            }
            else{
                System.out.println("USERNAME DO NOT MATCH");
                user.setSessionToken(null);
                em.flush();
                return false;
            }
        }
        return false;
    }

    public Boolean isAuthorizedAndManager(String username, String token) throws Exception{
        User user = em.createNamedQuery("User.findByToken", User.class).setParameter(1, token).getResultList().stream().findFirst().orElse(null);;
        System.out.println("USER TOKEN IS: " + token);
        System.out.println("USERNAME IS: " + username);
        if(user!=null){
           if(user.getUsername().equals(username)&&(user.getIsManager())){
               System.out.println("USER FOUND");
               return true;
           }
           else{
               System.out.println("USERNAME DO NOT MATCH");
               user.setSessionToken(null);
               em.flush();
               return false;
           }
        }
        return false;
    }

    public List<Ticket> getTicketsFromUS(String username) throws Exception{
        User user = em.createNamedQuery("User.findByUsername", User.class).setParameter(1, username).getResultList().stream().findFirst().orElse(null);
        List<Ticket> tickets = null;
        if(user != null) {
            em.refresh(user);
            tickets = user.getTickets();
       }
        return tickets;
    }

    public User findByUsername(String username) throws Exception{
        User user = em.createNamedQuery("User.findByUsername", User.class).setParameter(1, username).getResultList().stream().findFirst().orElse(null);
        if(user!=null){
            em.refresh(user);
        }
        return user;
    }

    public User find(int id) throws Exception{
        User user = em.find(User.class, id);
        if(user!=null){em.refresh(user);}
        return user;
    }

    public User createUser(String usrn, String pwd, String email, boolean isManager, String phoneNumber) throws Exception{
        try{
            //checks that username and email aren't already in use
            if(em.createNamedQuery("User.exists", Long.class).setParameter(1, usrn).setParameter(2, email).getSingleResult() >= 1) return null;
            User user = new User();
            user.setUsername(usrn);
            Argon2PasswordEncoder encoder = new Argon2PasswordEncoder(ARGON2_SALT_LENGTH, ARGON2_HASH_LENGTH, ARGON2_PARALLELISM, ARGON2_MEMORY, ARGON2_ITERATIONS);
            String hash = encoder.encode(pwd);
            user.setPassword(hash);
            user.setEmail(email);
            user.setSessionToken(generateSessionToken());
            user.setIsManager(isManager);
            user.setPhoneNumber(phoneNumber);
            em.persist(user);
            em.flush();

            return user;
        } catch (PersistenceException e) {
            throw new Exception("Could not insert user");
        }
    }

    private static final SecureRandom secureRandom = new SecureRandom(); //threadsafe
    private static final Base64.Encoder base64Encoder = Base64.getUrlEncoder(); //threadsafe

    public static String generateSessionToken() {
        byte[] randomBytes = new byte[24];
        secureRandom.nextBytes(randomBytes);
        return base64Encoder.encodeToString(randomBytes);
    }

}
