import Header from "@/component/Header";
import Http from "@/store/apis/Http";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const Getimage = () => {
   const[image, setImage]=useState("");
   const submitHandle = (e)=> {

      const formData = new FormData();
      formData.append('image', image)
      const params = {
         'image' : image
      }
      console.log("formData", formData);
      console.log("params", params);
      Http.post("/getimage", formData).then((res)=> {
         console.log("data", res);
      });
   }

   const imagehandle =(e)=> {
      setImage(e.target.files[0])
   }
   return (
      <>
         <Header />
         <br />
         <br />
         <br />
         <br />
         <section className="section-padding-lg">
            <Form>
               <input type={"file"} name={"image"} onChange={imagehandle} />
               <Button onClick={submitHandle} primary>Primary</Button>

            </Form>

         </section>

      </>
   );
}

export default Getimage;