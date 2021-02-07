package polimi.it.AMW;

import Responses.StringResponse;
import Responses.UserResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import polimi.it.AMB.AAVEngine;
import polimi.it.AMB.AccountManagerComponent;
import polimi.it.DL.entities.User;
import prototypes.*;
import responseWrapper.ResponseWrapper;

import javax.ejb.EJB;
import javax.faces.annotation.RequestMap;
import javax.validation.Valid;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/AMW")
@Api(value = "Methods")
public class Gateway {

    @EJB(name = "AccountManagerService")
    AccountManagerComponent ams;

    @EJB(name = "ResponseWrapper")
    private ResponseWrapper responseWrapper ;

    @EJB(name = "AVVEngine")
    AAVEngine avv;


    @POST
    @ApiOperation(value = "LogIn")
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully registered", response = User.class),
            @ApiResponse(code = 400, message = "Registration failed", response =  String.class),
            @ApiResponse(code = 500, message = "Invalid payload/error", response = String.class)})
    public Response userLogin(@Valid @RequestMap Credentials credentials) throws Exception {
        String message = "something wrong";
        Response response;
        Response.Status status;
        try {
            if (!avv.isEmpty(credentials)) {
                    return ams.loginManagement(credentials);
            }
            else {
                message = "Empty Credentials";
                status = Response.Status.BAD_REQUEST;
            }
        } catch (Exception e) {
            message = "Internal server error. Please try again later1.";
            status = Response.Status.INTERNAL_SERVER_ERROR;
        }
        response = responseWrapper.generateResponse(avv.getNewSessionToken(credentials.getUsername()),status, message);
        return response;
    }


    @POST
    @ApiOperation(value = "Register a new user to CLup")
    @Path("/registration")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully registered", response = User.class),
            @ApiResponse(code = 400, message = "Registration failed", response = String.class),
            @ApiResponse(code = 500, message = "Invalid payload/error", response = String.class)})
    public Response userRegistration(@Valid @RequestMap RegistrationCredentials credentials) throws Exception {
        Response response;
        Response.Status status= Response.Status.GATEWAY_TIMEOUT;
        String message;
        try {
            message = avv.checkRegistration(credentials);
        } catch (Exception e) {
            message = "Internal server error. Please try again later1.";
            status= Response.Status.INTERNAL_SERVER_ERROR;
        }

        if (message.equals("OK")){
            try {
                   response= ams.registrationManagement(credentials);
                   return response;
                } catch (Exception e) {
                e.printStackTrace();
                message = "Internal server error. Please try again later2.";
                status= Response.Status.INTERNAL_SERVER_ERROR;

            }
        }
        response = responseWrapper.generateResponse(avv.getNewSessionToken(credentials.getUsername()),status, message);
        return response;
    }


    @GET
    @ApiOperation(value = "Register a new user to CLup")
    @Path("/logout")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully logged out",response = String.class),
            @ApiResponse(code = 400, message = "Something went wrong", response = String.class),
            @ApiResponse(code = 500, message = "Something went wrong", response = String.class)})
    public Response logOut(@HeaderParam("username") String username) {
        String message;
        Response response;
        try {
                ams.logoutManagement(username);
                avv.invalidateSessionToken(username);
                message = "Successfully logged out!";
                response=responseWrapper.generateResponse(null,Response.Status.OK, message);
                return response;
        } catch (Exception e) {
            message = "Internal server error. Please try again later2.";
            response=responseWrapper.generateResponse(null,Response.Status.OK, message);
            return response;
        }
    }

    @GET
    @ApiOperation(value = "Get User Info")
    @Path("/userinfo")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Success userinfo ", response = User.class),
            @ApiResponse(code = 400, message = "Something went wrong", response = String.class),
            @ApiResponse(code = 401, message = "Unauthorized", response = String.class),
            @ApiResponse(code = 500, message = "Something went wrong", response = String.class)})
    public Response userInfo(@HeaderParam("username") String username, @HeaderParam("session-token") String sessionToken) throws Exception {
        String message;
        Response response;
        Response.Status status;

        try {
            if(avv.isAuthorized(username, sessionToken)){
                try {
                    response = ams.getUserInfo(username);
                    return response;
                }catch (Exception e){
                    message= "problem with get user info in ams";
                    status= Response.Status.INTERNAL_SERVER_ERROR;
                    avv.invalidateSessionToken(username);
                    response = responseWrapper.generateResponse(null,status, message);
                    return response;
                }
            }
            message = "Unauthorized!";
            status= Response.Status.UNAUTHORIZED;
            avv.invalidateSessionToken(username);
            response = responseWrapper.generateResponse(null,status, message);
            return response;
        } catch (Exception e) {
            status= Response.Status.INTERNAL_SERVER_ERROR;
            message = "problem with get user info in avv";
            response = responseWrapper.generateResponse(null,status, message);
            return response;
        }
    }

}
