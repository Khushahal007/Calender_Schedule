const express = require('express')
const { Router } = require('express')
const calenderModel = require('../Model/calenderModel')
const scheduleModel = require('../Model/scheduleModel')
const moment = require('moment')

const calenderController = Router();

calenderController.post('/enroll', (req, res) => {
    const { course, hours } = req.body;
    const date = moment().add(1, 'days').startOf('day').add(8, 'hours').toDate(); // Start at 8am next available workday
    const enroll = new calenderModel({ course, hours, date });
    enroll.save()
      .then(() => {
        res.status(200).send('Enrollment successful');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal server error');
      });

  });


calenderController.get('/schedule', async (req, res) => {
  try {
    const schedule = await calenderModel.find();
    res.json(schedule);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});
module.exports = { calenderController }


