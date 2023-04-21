import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormOne, FormTwo, FormThree } from '../components/allForms/AllForms';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [key, setKey] = useState('1');
  const navigate = useNavigate();

  return (
    <main className="formContainer">
      <Tabs activeKey={key} onSelect={k => setKey(k)} className="mb-3">
        <Tab eventKey="1" title="Form 1">
          <FormOne
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            showSuccess={showSuccess}
            setShowSuccess={setShowSuccess}
            setKey={setKey}
          />
        </Tab>
        <Tab eventKey="2" title="Form 2">
          <FormTwo
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            address={address}
            setAddress={setAddress}
            showSuccess={showSuccess}
            setShowSuccess={setShowSuccess}
            setKey={setKey}
          />
        </Tab>
        <Tab eventKey="3" title="Form 3">
          <FormThree
            contact={contact}
            setContact={setContact}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            showSuccess={showSuccess}
            setShowSuccess={setShowSuccess}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            setKey={setKey}
            email={email}
            password={password}
            firstName={firstName}
            lastName={lastName}
            address={address}
            navigate={navigate}
          />
        </Tab>
      </Tabs>
    </main>
  );
};
