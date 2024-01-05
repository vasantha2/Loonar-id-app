import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Devi completare questo campo"),
    password: Yup.string().required("Devi completare questo campo"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      hidePassword: true,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Perform actions on successful validation
      console.log("Form is valid. Perform actions here.", values);
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.heading}>Benvenuto!</Text>

        <Text style={styles.username}>Username</Text>

        <TextInput
          style={[
            styles.input,
            formik.errors.username &&
              formik.touched.username &&
              styles.errorInput,
          ]}
          placeholder="Inserisci il tuo nome utente"
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          value={formik.values.username}
        />

        {formik.errors.username && formik.touched.username ? (
          <Text style={styles.errorText}>{formik.errors.username}</Text>
        ) : null}

        <View style={{ marginVertical: 20 }}>
          <View style={styles.passwordContainer}>
            <Text style={styles.password}>Password</Text>

            <TouchableHighlight
              style={styles.toggleButton}
              onPress={() =>
                formik.setFieldValue(
                  "hidePassword",
                  !formik.values.hidePassword
                )
              }
            >
              <Text style={styles.smallpassword}>
                {formik.values.hidePassword
                  ? " Hai dimenticato la password?"
                  : "Nascondi"}
              </Text>
            </TouchableHighlight>
          </View>

          <TextInput
            style={[
              styles.input,
              formik.errors.password &&
                formik.touched.password &&
                styles.errorInput,
            ]}
            placeholder="Inserisci la password"
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            value={formik.values.password}
            secureTextEntry={formik.values.hidePassword}
          />
          {formik.errors.password && formik.touched.password ? (
            <Text style={styles.errorText}>{formik.errors.password}</Text>
          ) : null}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            onPress={formik.handleSubmit}
            style={styles.button}
            underlayColor="#4169E1"
          >
            <Text style={styles.buttonText}>ACCEDI</Text>
          </TouchableHighlight>

          <View style={styles.primarycontainer}>
            <Text style={styles.primarytext}>
              By continuing you agree to our Terms of Service and Privacy Policy
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.Nonhai}>
          Non hai un account?
          <Text style={styles.register}> Registrati</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    padding: 20, // Add padding if necessary
    borderRadius: 10, // Optional: Add border radius for a card-like appearance
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#030D29",
    flexDirection: "row",
    padding: 10,
    height: 55,
    paddingHorizontal: 15,
    width: 273,
    marginLeft: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "300",
    marginBottom: 20,
    textAlign: "center",
    color: "#4D4D4D",
  },

  button: {
    width: 273, // Fill width with a specific value
    height: 52, // Hug height with a specific value
    padding: 4, // paddingTop, paddingRight, paddingBottom, paddingLeft
    paddingHorizontal: 16, // Horizontal padding
    borderRadius: 32,
    margin: 10,
    gap: 10, // This property may not be directly supported, but you can use marginVertical or marginHorizontal to achieve a similar effect
    backgroundColor: "#56A4EB", // Background color for the button
    justifyContent: "center", // Center the text vertically
    alignItems: "center", // Center the text horizontally
  },
  buttonText: {
    color: "#FAFBFB", // Set the text color
    textAlign: "center",
    fontSize: 15,
    fontWeight: "700",
  },
  username: {
    fontWeight: "600",
    fontSize: 11,
    color: "#434954",
    width: 273,
    height: 12,
    textAlign: "justify",
    marginLeft: 15,
  },

  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 273,
  },
  password: {
    fontWeight: "600",
    fontSize: 11,
    color: "#434954",
    height: 12,
    textAlign: "justify",
    marginLeft: 15,
  },
  smallpassword: {
    fontWeight: "400",
    fontSize: 10,
    color: "#798294",
  },
  primarycontainer: {
    // Add any necessary styles for your container
    justifyContent: "center", // Center vertically if needed
    alignItems: "center", // Center horizontally
  },
  primarytext: {
    width: 209,
    height: 28,
    fontWeight: "400",
    fontSize: 10,
    textAlign: "center",
    color: "#798294",
  },
  Nonhai: {
    height: 16,
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    color: "#F3F7FF",
    margin: 10,
  },
  register: {
    width: 59,
    height: 16,
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    color: "#F3F7FF",
  },
  errorText: {
    color: "#E8070F",
    fontSize: 10,
    fontWeight: "400",
    marginLeft: 15,
    justifyContent: "center",
  },
  errorInput: {
    borderColor: "#E8070F",
    borderWidth: 1,
  },
});
