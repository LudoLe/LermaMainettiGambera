package polimi.it.QSB;

import Responses.StringResponse;
import Responses.TimeResponse;
import polimi.it.DL.services.ShopService;
import polimi.it.DL.services.TicketService;
import prototypes.EnqueueData;
import prototypes.PreEnqueuementData;
import responseWrapper.ResponseWrapper;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.core.Response;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

@Stateless(name = "LineUpComponent")
public class LineUpComponent {

    @EJB(name = "services/ShopService")
    ShopService shopService;

    @EJB(name = "ResponseWrapper")
    ResponseWrapper responseWrapper;

    @EJB(name = "services/TicketService")
    TicketService ticketService;

    public boolean checkIfAlreadyEnqueued(String username) throws Exception{
        boolean bol;
        bol=ticketService.alreadyHasTicket(username);
        return bol;
    }

    public boolean checkProperty(String username, int ticketid) throws Exception{
        boolean bol;
        bol=ticketService.itsTicketOf(username, ticketid);
        return bol;
    }


    public Response managePreEnqueuement(PreEnqueuementData preEnqueuementData) throws Exception {
        Response response;
        Response.Status status;
        int shopId= preEnqueuementData.getShopId();
        int timeToGetToTheShop= preEnqueuementData.getTimeToGetToTheShop();

        //1.se la gente nel negozio in questo momento è meno di max capacity allora calcolo il tempo a partire da ora
            Calendar c = Calendar.getInstance();
            Calendar c2 = Calendar.getInstance();
            Date today = new Date();
            c.setTime(today);
            boolean capacity;
            try{
                capacity= shopService.lessThanActualCapacity(shopId);
            }catch(Exception e){
                status = Response.Status.INTERNAL_SERVER_ERROR;
                response = responseWrapper.generateResponse(status, "error retrieving people in the shop"));
                return response;
            }
            if(
                   capacity
            ){
                c.setTime(new Date());
                c.add(Calendar.MINUTE, timeToGetToTheShop);

                //2. se no prendo l'ultimo scheduled ticket e sommo permanenza time da quel momento
            }else{
                Date exitTime;
                try{
                    exitTime= shopService.lastTicketTime(shopId);
                    if(exitTime.after(c.getTime())){
                        c.setTime(exitTime);
                    }else{
                        c.setTime(new Date());
                        c.add(Calendar.MINUTE, timeToGetToTheShop);
                    }
                }catch(Exception e){
                    status = Response.Status.INTERNAL_SERVER_ERROR;
                    response = responseWrapper.generateResponse(status, new StringResponse("error retrieving last ticket exiting time"));
                    return response;
                }
            }

            Date ticketEnteringTime  = c.getTime();
            // a questo punto calcolo quanto tempo al massimo può restare nel negozio il client dato lo shift
            Date closingTime;
            try{
                closingTime= shopService.closingTimeForShopForDay(shopId, new SimpleDateFormat("EE").format(today));

            }catch(Exception e){
              status = Response.Status.INTERNAL_SERVER_ERROR;
              response = responseWrapper.generateResponse(status, new StringResponse("error retrieving time for shopping"));
              return response;
            }
            long diff = closingTime.getTime() - ticketEnteringTime.getTime();
            if(diff < 15*60 ){
                // niente da fare
                status = Response.Status.OK;
                response = responseWrapper.generateResponse(status, new StringResponse("the shop will close soon"));
                return response;
            }
            //ritorno il tempo che ha per fare shoppin e a lato client gli chiedi se gli va bene
            else {
                status = Response.Status.OK;
                response = responseWrapper.generateResponse(status, new TimeResponse(new Date(diff), ticketEnteringTime));
                return response;
            }
    }

    public Response enqueue(EnqueueData enqueueData){
        Response response;
        Response.Status status;
        try{
            ticketService.create(enqueueData.getEnteringTime(), enqueueData.getExitingTime(), enqueueData.getShopid(), enqueueData.getUserid());
        }catch (Exception e){
            status = Response.Status.INTERNAL_SERVER_ERROR;
            response = responseWrapper.generateResponse(status, new StringResponse("Something went wrong retry later"));
            return response;

        }
        status = Response.Status.OK;
        response = responseWrapper.generateResponse(status, new StringResponse("You have been correctly enqueued"));
        return response;
    }

    public Response dequeue(int ticketid){
        Response response;
        Response.Status status;
        try{
            ticketService.delete(ticketid);
        }catch (Exception e){
            status = Response.Status.INTERNAL_SERVER_ERROR;
            response = responseWrapper.generateResponse(status, new StringResponse("Something went wrong retry later"));
            return response;

        }
        status = Response.Status.OK;
        response = responseWrapper.generateResponse(status, new StringResponse("You have been correctly deenqueued"));
        return response;
    }


}
