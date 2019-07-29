const Job = require("../models/Job");

const { uploadFile } = require('../utils/cloudinary');
const { parseEmail, parsePaintQuote } = require("../utils/parse");

const index = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ _id: -1 });
    res.status(200).send(jobs);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    res.status(200).send(job);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

const create = async (req, res) => {
  try {
    const data = req.body;
    const newJob = await Job.create(data);
    res.status(201).send(newJob);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedJob = await Job.findByIdAndUpdate(id, data, { new: true });
    res.status(202).send(updatedJob);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await Job.findByIdAndDelete(id);
    res.status(202).send(deletedJob);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

const email = async (req, res) => {
  try {
    const emailString = req.body["stripped-text"];
    const emailSubject = req.body["Subject"];
    let jobData
    if (emailSubject === "Roof Painting Quote") {
      jobData = parsePaintQuote(emailString)
    } else {
      jobData = parseEmail(emailString)
    }
    const foundJob = await Job.findOne({ email: jobData.email })
    if (foundJob) {
      res.send('Already have it.')
      console.log('A duplicate was sent.')
    } else {
      await Job.create(jobData);
      res.send('thanks'); // Mailgun notified of success and will not retry
    }
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

const uploadImage = async (req, res) => {
  try {
    const { buffer } = req.file;
    const { id } = req.params;
    const { url } = await uploadFile(buffer);
    const updatedJob = await Job.findByIdAndUpdate(
      id,
      {
        $push: { imageUrls: url }
      },
      { new: true }
    );
    res.status(202).send(updatedJob);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

const editFollowup = async (req, res) => {
  try {
    const { jId, fId } = req.params;
    const { newComment } = req.body;
    const job = await Job.findById(jId);
    const followup = await job.followUps.id(fId);
    followup.tradeComments = newComment;
    job.save();
    res.status(202).send(job);
  } catch (error) {
    console.log(error.stack);
    res.status(500).send(error.message);
  }
};

module.exports = {
  index,
  show,
  create,
  edit,
  destroy,
  email,
  uploadImage,
  editFollowup
};
