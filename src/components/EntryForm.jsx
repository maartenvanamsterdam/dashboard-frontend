import { useState } from 'react';
import api from '../api/api';

function EntryForm() {
  const [form, setForm] = useState({
    date: '',
    energyLevel: '',
    sleepHours: '',
    workedOut: false,
    mood: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/entries', form);
      alert('Entry saved!');
      setForm({ date: '', energyLevel: '', sleepHours: '', workedOut: false, mood: '' });
    } catch (err) {
      console.error(err);
      alert('Error saving entry');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Energy Level (1–10):
        <input type="number" name="energyLevel" min="1" max="10" value={form.energyLevel} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Sleep Hours:
        <input type="number" name="sleepHours" step="0.1" value={form.sleepHours} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Worked Out:
        <input type="checkbox" name="workedOut" checked={form.workedOut} onChange={handleChange} />
      </label>
      <br />
      <label>
        Mood:
        <input type="text" name="mood" value={form.mood} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Save Entry</button>
    </form>
  );
}

export default EntryForm;

