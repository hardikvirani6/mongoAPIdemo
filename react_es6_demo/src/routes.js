import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import ContactPage from './components/contact/ContactPage';
import ManageContactPage from './components/contact/ManageContactPage';
import UpdateContactPage from './components/contact/UpdateContactPage';
import ProductPage from './components/product/ProductPage';

export default (
  <Route path="/" component={App}>
  <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="contact" component={ContactPage} />
    <Route path="contacts" component={ManageContactPage} />
    <Route path="contactUpd" component={UpdateContactPage} />
    <Route path="product" component={ProductPage} />
  </Route>
);
