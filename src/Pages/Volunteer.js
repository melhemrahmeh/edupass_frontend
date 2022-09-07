import React, { useReducer, useEffect, useCallback } from "react";
import Headers from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import Cards from '../components/ui/volunteer/cards';
import VolunteerModal from "../components/ui/volunteer/VolunteerModal";

const reducer = (state, action) => {
  switch (action.type) {
    case 'load-volunteer-start': return { ...state, loading: true };
    case 'load-volunteer-success':
      return { ...state, loading: false, volunteerOpportunities: action.volunteerOpportunities };
    case 'load-volunteer-failure':
      return { ...state, loading: false, errorMessage: action.errorMessage };
    case 'add-volunteer-modal-is-open':
    return { ...state,
      addVolunteerModalIsOpen: true,
      addVolunteerModalId: action.id,
      addVolunteerModalPosition: action.position };
    case 'close-modal':
      return { ...state,
        loading: false,
        addVolunteerModalIsOpen: false,
        addVolunteerModalId: null,
        addVolunteerModalPosition: null
     }
    default:
      throw new Error('this is an unhandled dispatch type'+ action.type );
  }
}

const Volunteer = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    errorMessage: null,
    volunteerOpportunities: [],
    addVolunteerModalIsOpen: false,
    addVolunteerModalId: null,
    addVolunteerModalPosition: null
  });

  const {
    loading,
    errorMessage,
    volunteerOpportunities,
    addVolunteerModalIsOpen,
    addVolunteerModalId,
    addVolunteerModalPosition
  } = state;

  useEffect(() => {
    dispatch({ type: 'load-volunteer-start' });
    fetch('https://edupass-rest-apis.herokuapp.com/api/opportunities/')
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'load-volunteer-success', volunteerOpportunities: res });
      }
      )
      .catch(err => {
        dispatch({ type: 'load-volunteer-failure', errorMessage: err });
      });
  }, [])

  const openVolunteerModal = useCallback((e, data) => {
    console.log(data);
    dispatch({ type: 'add-volunteer-modal-is-open', id: data.volunteerId, position: data.position });
  }, []);

  const closeModal = useCallback(() => {
    dispatch({ type: 'close-modal' });
  }, []);

  return (
    <>
      <Headers />
      <section className="sample-text-area">
        <div className="container box_1170">
          <h3 className="text-heading">Available volunteering opportunities.</h3>
          <p className="sample-text"><h3>
          “As you grow older, you will discover that you have two hands — one for helping yourself, the other for helping others.”
          <br/> <strong>— Audrey Hepburn</strong><br/>
          “Because the people who are crazy enough to think they can change the world are the ones who do.” <br/>
          <strong>– Steve Jobs</strong><br/>
          “There is no better exercise for your heart than reaching down and helping to lift someone up.” <br/>
          <strong>– Bernard Meltzer</strong>
          </h3>
          </p>
        </div>
      </section>
      {loading && <div>loading...</div>}
      {errorMessage && <div>oops {errorMessage}</div>}
      <VolunteerModal
      addVolunteerModalId={addVolunteerModalId}
      addVolunteerModalPosition={addVolunteerModalPosition}
      closeModal={closeModal}
      isOpen={addVolunteerModalIsOpen} />
        <Cards loading={loading}
        errorMessage={errorMessage}
        volunteerOpportunities={volunteerOpportunities}
        openVolunteerModal={openVolunteerModal} />
      <Footer />
    </>
  );
};

export default Volunteer;
