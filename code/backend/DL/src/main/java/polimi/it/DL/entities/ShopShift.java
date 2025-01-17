package polimi.it.DL.entities;

import com.google.gson.annotations.Expose;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "`shop_shift`", schema = "clup")
@NamedQueries({
@NamedQuery(name="ShopShift.forShopForDay", query="SELECT s FROM ShopShift s WHERE  s.shop = (SELECT m FROM Shop m WHERE m.id=?1) AND s.day=?2" )
})
public class ShopShift implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Expose
    private int id;
    @Expose
    @Column(name="opening_time")
    private Date openingTime;
    @Expose
    @Column(name="closing_time")
    private Date closingTime;
    @Expose
    @Column(name="day")
    private int day;
    @Expose
    @ManyToOne
    @JoinColumn(name = "shop_id", referencedColumnName = "id", nullable = false)
    private Shop shop;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

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

    public Shop getShop() {return shop;}
    public void setShop(Shop shop) {this.shop = shop; }
}
