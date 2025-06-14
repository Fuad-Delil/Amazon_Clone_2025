import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../component/LayOut/LayOut";
import { DataContext } from "../../component/DataProvider/DataProvider";
import { db } from "../../utility/firebase";
import classes from "./Order.module.css";
import ProductCard from "../../component/Product/ProductCard";
function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <div>
      <LayOut>
        <section className={classes.container}>
          <div className={classes.orders__container}>
            <h2>Your Orders</h2>
            {orders?.length == 0 && <div style={{padding:"20px"}}> you don't have orders yet </div>}
            {/* ordered items */}
            <div>
              {orders?.map((eachOrder, i) => {
                return (
                  <div key={i}>
                    <hr />
                    <p>order ID:{eachOrder.id}</p>
                    {eachOrder?.data?.basket?.map((order) => {
                      return (
                        <ProductCard
                          flex={true}
                          product={order}
                          key={order.id}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </LayOut>
    </div>
  );
}

export default Orders;
