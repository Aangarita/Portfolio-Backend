import contactService from "../services/contactService.js";
import mailService from "../services/mailService.js";

const createContact = async (req, res) => {
  try {
    const body = req.body;

    if (!body.name || body.name.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Name is required",
        data: null,
      })
    };

      if (!body.email || body.email.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Email is required",
        data: null,
      })
    };

      if (!body.message || body.message.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Message is required",
        data: null,
      })
    };
    
    const contact = await contactService.createContact({
      name: body.name,
      email: body.email,
      message: body.message,
    });

    await mailService.sendMail(contact);

    res.status(201).json({
      success: true,
      message: "Contact saved and email sent successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Error in createContact", error);
    res.status(500).json({
      success: false,
      message: error.message || "Error saving contact",
      data: null,
    });
  }
};

export default {
  createContact,
}