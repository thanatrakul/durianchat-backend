import React, { useState } from 'react';

const CRMForm = () => {
  const [crmDetails, setCrmDetails] = useState({ apiKey: '', crmUrl: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send CRM details to the backend
    try {
      const response = await fetch('http://localhost:8080/api/crm/integrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(crmDetails),
      });
      if (response.ok) {
        alert('CRM integrated successfully!');
      } else {
        alert('Failed to integrate CRM.');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to the CRM.');
    }
  };

  return (
    <div className="crm-form">
      <h3>CRM Integration</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="CRM API Key"
          value={crmDetails.apiKey}
          onChange={(e) => setCrmDetails({ ...crmDetails, apiKey: e.target.value })}
          className="border rounded p-2 mb-2"
        />
        <input
          type="url"
          placeholder="CRM URL"
          value={crmDetails.crmUrl}
          onChange={(e) => setCrmDetails({ ...crmDetails, crmUrl: e.target.value })}
          className="border rounded p-2 mb-2"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Integrate CRM
        </button>
      </form>
    </div>
  );
};

export default CRMForm;