import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Button, Container, Form, Input } from 'semantic-ui-react'
import Header from "../../component/Header"
import Head from "next/head";
import Http from "@/store/apis/Http";
const Contact = () => {


   // Axios.defaults['X-CSRF-TOKEN'] = token;
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");

   const contactsubmit = (e) => {
      const params = {
         name:name,
         phone:phone,
         email:email,
         address:address,
      }
      console.log("params", params);
      Http.post("/contact", params).then((res)=> {
         const data = res.data;
         console.log("res =>", data);
         setName();
         setPhone();
         setEmail();
         setAddress();
      })
      .catch((error) => {
         console.error(error);
       });
   }
   // useEffect(()=>{
   //    contactFunction();
   // });
   return (
      <>
         <main>
            <section className="section-padding-xxl">
               <div>
               <Header />
               <Container>
                  <div>
                     <Form>
                        <Form.Group widths='equal'>
                           <Form.Field
                           id='form-input-control-first-name'
                           control={Input}
                           label='name'
                           placeholder='name'
                           value={name}
                           onChange={(e) => setName(e.target.value)}
                           />
                           <Form.Field
                           id='phone'
                           control={Input}
                           label='phone'
                           placeholder='phone'
                           value={phone}
                           onChange={(e)=> setPhone(e.target.value)}
                           />
                           </Form.Group>
                        <Form.Group widths='equal'>
                           <Form.Field
                           id='email'
                           control={Input}
                           label='email'
                           placeholder='email'
                           value={email}
                           onChange={(e)=> setEmail(e.target.value)}
                           />
                           <Form.Field
                           id='address'
                           control={Input}
                           label='address'
                           placeholder='address'
                           value={address}
                           onChange={(e)=> setAddress(e.target.value)}
                           />
                        </Form.Group>
                           <Button primary>
                              <a onClick={()=> contactsubmit()}>Submit</a>
                           </Button>
                     </Form>
                  </div>

               </Container>
               </div>
            </section>
         </main>
      </>
   );
}

export default Contact;