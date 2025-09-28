import * as Yup from "yup"
import {FormikProvider, Form, Formik} from "formik"

export function Story() {
   
  const formikConfig = {
    initialValues:{
        title: "",
        category: "",
        location: "",
        story: "",
    },

    validationSchema: Yup.object({
        title: Yup.string() 
        .max(256, "Maximo 256 caracteres o menos")
        .min(10, "Minimo 10 caracteres")
        .required("Por favor llenar este campo"),
        category: Yup.string() .required("Selecione una categoria"),
        location: Yup.string() .required("Elija una locacion"),
        Story: Yup.string()
        .min(30, "Minimo 30 caracteres")
        .required("Por favor llenar este campo")
    }),
    onsubmit:handleSubmit,
  }
   
    return(
        <>
     
            <FormikProvider>
                <Form>

                </Form>
            </FormikProvider>
        </>
    )
    
}