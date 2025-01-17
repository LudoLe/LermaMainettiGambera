package prototypes;

import java.io.Serializable;
import java.util.Date;

public class ShopShiftProto implements Serializable {
    private static final long serialVersionUID = 1L;

    private Date openingTime;
    private Date closingTime;
    private int day;
    private int shopid;



    public Date getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(Date openingTime) {
        this.openingTime = openingTime;
    }

    public Date getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(Date closingTime) {
        this.closingTime = closingTime;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }


    public int getShopid() {
        return shopid;
    }

    public void setShopid(int shopid) {
        this.shopid = shopid;
    }
}
