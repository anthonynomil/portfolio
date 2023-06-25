import {
  Box,
  Button,
  Container,
  FormControl,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as emailJs from "@emailjs/browser";
import { publicKey, serviceId, templateId } from "../config/emailjs.config";

const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(`L'adresse email est invalide`)
      .required(`L'adresse email est requise`),
    subject: Yup.string().required(`Le sujet est requis`),
    message: Yup.string().required(`Le message est requis`),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const handleOnSubmit = async (event: any) => {
    emailJs.init(publicKey);
    console.log(event);
    const { email, subject, message } = event;
    const response = await emailJs.send(serviceId, templateId, {
      from_name: email,
      subject,
      message,
    });
    if (response.status === 200) {
      enqueueSnackbar("Email sent successfully", { variant: "success" });
      reset({
        email: "",
        subject: "",
        message: "",
      });
    } else {
      enqueueSnackbar("Email failed to send", { variant: "error" });
    }
  };
  return (
    <Container>
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          mt: 10,
        }}
      >
        <FormControl
          component={"form"}
          sx={{
            sm: { width: "100%" },
            xs: { width: "100%" },
            md: { width: "50%" },
            lg: { width: "50%" },
            xl: { width: "50%" },
          }}
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <Paper
            elevation={12}
            sx={{ p: 5, display: "flex", flexDirection: "column" }}
          >
            <Typography
              align={"center"}
              variant={"h3"}
              color={"primary"}
              sx={{ my: 5 }}
            >
              Send me an e-mail !
            </Typography>
            <TextField
              label={"Email"}
              sx={{ mb: 3 }}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              autoComplete={"email"}
              {...register("email", { required: true })}
            ></TextField>
            <TextField
              label={"Subject"}
              sx={{ mb: 3 }}
              error={Boolean(errors.subject)}
              helperText={errors.subject?.message}
              {...register("subject", { required: true })}
            ></TextField>
            <TextField
              label={"Message"}
              sx={{ mb: 3 }}
              multiline
              rows={4}
              error={Boolean(errors.message)}
              helperText={errors.message?.message}
              {...register("message", { required: true })}
            ></TextField>
            <Button variant={"contained"} sx={{ p: 2 }} type={"submit"}>
              Send Mail
            </Button>
          </Paper>
        </FormControl>
      </Box>
    </Container>
  );
};

export default Contact;
