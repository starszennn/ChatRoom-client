import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './Main.jsx';
import Chat from './Chat.jsx';

const AppRoutes = () => (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
  );

export default AppRoutes;