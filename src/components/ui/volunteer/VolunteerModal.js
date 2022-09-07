import React, { useReducer } from "react";
import { useCallback } from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import axios from "axios";
const reducer = (state, action) => {
  switch (action.type) {
    case "name-changed":
      return { ...state, fullName: action.fullName };
    case "phone-number-changed":
      return { ...state, phoneNumber: action.phoneNumber };
    case "email-changed":
      return { ...state, email: action.email };
    case "start-loading-application":
      return { ...state, loading: true, errorMessage: null };
    case "loading-application-success":
      return {
        ...state,
        loading: false,
        fullName: "",
        phoneNumber: "",
        email: "",
      };
    case "loading-application-failed":
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
        fullName: "",
        phoneNumber: "",
        email: "",
      };
    case "clean-close":
      return {
        ...state,
        errorMessage: null,
        fullName: "",
        phoneNumber: "",
        email: "",
      };
    default:
      throw new Error("this is an unhandled dispatch type" + action.type);
  }
};

const VolunteerModal = (props) => {
  const { addVolunteerModalId, addVolunteerModalPosition, closeModal, isOpen } =
    props;

  const [state, dispatch] = useReducer(reducer, {
    fullName: "",
    email: "",
    phoneNumber: "",
    loading: false,
    errorMessage: null,
  });

  const { fullName, email, phoneNumber, loading, errorMessage } = state;

  const cleanCloseModal = useCallback(() => {
    dispatch({ type: "clean-close" });
    closeModal();
  }, [closeModal]);

  const fullNameChanged = useCallback((e, { value }) => {
    dispatch({ type: "name-changed", fullName: value });
  }, []);

  const emailChanged = useCallback((e, { value }) => {
    dispatch({ type: "email-changed", email: value });
  }, []);

  const phoneNumberChanged = useCallback((e, { value }) => {
    dispatch({ type: "phone-number-changed", phoneNumber: value });
  }, []);
  // needs to be fixed display errors, check for good inputs
  const submitModal = useCallback(
    (e, data) => {
      if (data.content === "Apply") {
        dispatch({ type: "start-loading-application" });
        axios
          .post(
            "https://edupass-rest-apis.herokuapp.com/api/applications/create/",
            {
              email: email,
              name: fullName,
              phoneNumber: phoneNumber,
              volunteeringOpportunity: addVolunteerModalId,
            }
          )
          .then((responce) => {
            console.log(responce);
            console.log("this is the responce");
            if (responce.data === "Added Successfully!!") {
              cleanCloseModal();
              dispatch({ type: "loading-application-success" });
            } else {
              dispatch({
                type: "loading-application-failed",
                errorMessage: "something went wrong on our end",
              });
            }
          })
          .catch((err) => {
            dispatch({ type: "loading-application-failed", errorMessage: err });
          });
      } else {
        cleanCloseModal();
      }
    },
    [addVolunteerModalId, cleanCloseModal, email, fullName, phoneNumber]
  );

  return (
    <>
      <Modal
        size="tiny"
        onClose={submitModal}
        open={isOpen}
        closeOnDocumentClick={false}
        closeOnDimmerClick={false}
        closeIcon
        closeOnEscape={false}
      >
        <Modal.Header>
          volunteer opportunity: {addVolunteerModalPosition}
        </Modal.Header>
        <Modal.Content>
          {errorMessage && <div>{errorMessage}</div>}
          <Form>
            <Form.Field>
              <label>Full Name</label>
              <Form.Input value={fullName} onChange={fullNameChanged} />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <Form.Input value={email} onChange={emailChanged} />
            </Form.Field>
            <Form.Field>
              <label>Phone Number</label>
              <Form.Input value={phoneNumber} onChange={phoneNumberChanged} />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="blue" content="Cancel" onClick={cleanCloseModal} />
          <Button
            loading={loading}
            color="blue"
            content="Apply"
            onClick={submitModal}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default VolunteerModal;
