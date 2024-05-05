import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material";
import styles from "./form.module.scss";
import {Field, Form, Formik, FormikHelpers, FormikProps} from "formik";
import {toast} from "react-toastify";

const initialValues = {
  name: "",
  email: "",
  number: 0,
  option: "",
  agreement1: false,
  agreement2: false,
  comments: ""
};

interface FormValues {
  name: string;
  email: string;
  number: number;
  option: string;
  agreement1: boolean;
  agreement2: boolean;
  comments: string;
}

const FormPage = () => {

  const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    console.log(values);
    toast.success("Enviado com Sucesso.");
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 5000);
  };

  return (
    <Paper className={styles.container} elevation={0}>
      <h1 id="title">Formulário de pesquisa</h1>
      <p id="description">Por favor, preencha a pesquisa abaixo:</p>
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<FormValues>) => (
          <Form className={styles.form_container}>
            <Field
              as={TextField}
              id="name"
              name="name"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              className={styles.formField}
            />
            <Field
              as={TextField}
              id="email"
              name="email"
              label="E-mail"
              type="email"
              variant="outlined"
              fullWidth
              required
              className={styles.formField}
            />
            <Field
              as={TextField}
              id="number"
              name="number"
              label="Número"
              type="number"
              variant="outlined"
              fullWidth
              required
              inputProps={{ min: 1, max: 100 }}
              className={styles.formField}
            />
            <FormControl component="fieldset" className={styles.formField}>
              <FormLabel component="legend">Escolha uma opção:</FormLabel>
              <RadioGroup
                aria-label="option"
                name="option"
                value={props.values.option}
                onChange={props.handleChange}
              >
                <FormControlLabel value="Opção 1" control={<Radio/>} label="Opção 1"/>
                <FormControlLabel value="Opção 2" control={<Radio/>} label="Opção 2"/>
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" className={styles.formField}>
              <FormLabel component="legend">Escolha entre as caixas de seleção:</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.values.agreement1}
                    onChange={props.handleChange}
                    name="agreement1"
                    color="primary"
                  />
                }
                label="Checkbox 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={props.values.agreement2}
                    onChange={props.handleChange}
                    name="agreement2"
                    color="primary"
                  />
                }
                label="Checkbox 2"
              />
            </FormControl>
            <Field
              as={TextField}
              id="comments"
              name="comments"
              label="Comentários adicionais"
              multiline
              rows={4}
              variant="outlined"
              className={styles.formField}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={props.isSubmitting}
              className={styles.submitButton}
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default FormPage;
