import axios from "axios";

// Firebase Database REST API
const questionsAPI =
  "https://lapsee-game-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json";

// Firebase Auth REST API
const signInAPI =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
const API_KEY = "AIzaSyAMr6forJbOnPT1hE39slIqSoUo394JE9Q";

class AdminService {
  login(email, password) {
    return axios.post(signInAPI + API_KEY, {
      email,
      password,
      returnSecureToken: true, //important
    });
  }

  getQuestions(user) {
    return axios.get(questionsAPI + "?auth=" + user.idToken);
  }

  putQuestions(questionsJson, user) {
    return axios.put(questionsAPI + "?auth=" + user.idToken, questionsJson);
  }

  // post format: question = { description, choices, answer }
  // postQuestion(question) {
  //   return axios.post(questionsAPI + ".json", question);
  // }

  // updateOneQuestion(id, updatedObject) {
  //   return axios.patch(questionsAPI + `/${id}.json`, updatedObject);
  // }

  // deleteQuestion(id) {
  //   return axios.delete(questionsAPI + `/${id}.json`);
  // }

  // deleteAllQuesiton() {
  //   return axios.delete(questionsAPI + ".json");
  // }
}

export default new AdminService();
