import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Meta from "../../../components/Meta";
import OrderDetail from "../../../components/OrderDetail";
import { DataContext } from "../../../dataContext/GlobalState";

const order = () => {
  const { state, dispatch } = useContext(DataContext);
  const { orders } = state;

  const router = useRouter();
  const { id } = router.query;

  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    const newArr = orders.filter((order) => order.id.toString() === id);
    setOrderDetail(newArr);
  }, [orders]);

  return (
    <div>
      <Meta title="Order Details - Fresh Food" />
      <OrderDetail orderDetail={orderDetail} state={state} />
    </div>
  );
};

export default order;
