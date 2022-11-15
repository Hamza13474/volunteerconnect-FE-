import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import AboutUs from '../../screens/aboutUs/AboutUs';
import Auth from '../../screens/auth/Auth';
import Landing from '../../screens/home/Landing';
import AddTask from '../../screens/tasks/AddTask';
import NgoProfile from '../../screens/ngo/CreateNGO';
import Tasks from '../../screens/tasks/Tasks';
import TasksDetails from '../../screens/tasks/TasksDetails';
import AllNGO from '../../screens/ngo/AllNGO';
import { useState } from 'react';
import { useEffect } from 'react';
import NgoDetails from '../../screens/ngo/NgoDetails';
import Profile from '../../screens/profile/Profile';
import DonateUs from '../../components/home/DonateUs';

const MainRoutes = () => {


    const [isAdmin, isSetAdmin] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/tasks' element={<Tasks />} />
                <Route path='/tasksdetails/:tid' element={<TasksDetails />} />
                <Route path='/createngo' element={<NgoProfile />} />
                <Route path='/allngo' element={<AllNGO />} />
                <Route path='/ngodetail/:tid' element={<NgoDetails />} />
                <Route path='/addtask' element={<AddTask />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/donateus' element={<DonateUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes