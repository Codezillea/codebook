function getSession()
{
    
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));

    return { token ,  cbid };

}
export async function getUser()
{
    const browserData = getSession()

    const requestOptions =  {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`,requestOptions);
    if(!response.ok){
        throw { message :response.statusText , status : response.status};//eslint-disable-line
    }
    const data = await response.json();
    return data;

}
export async function getUserOrders()
{
    const browserData = getSession();
    const requesOptions = {
        method : "GET",
        headers : { "Content-Type" : "application/json",Authorization : `Bearer ${browserData.token}`} 

      }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?${browserData.cbid}`,requesOptions);
      if(!response.ok){
        throw { message :response.statusText , status : response.status};//eslint-disable-line
    }
      const data = await response.json();
      return data;

}
export async function createOrder(cartList,total,user)
{
    const browserData = getSession()

    const order = {
        cartList: cartList,
        amt_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,//user refers to state wihich stores api call
            email: user.email,
            id: user.id
        }
    }

    const requesOptions ={
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },

        body: JSON.stringify(order)

    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`,requesOptions );
    if(!response.ok){
        throw { message :response.statusText , status : response.status};//eslint-disable-line
    }
    const data = await response.json();
    return data;

}
