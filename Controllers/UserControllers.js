import UserModal from "../Modals/UserModal.js"

export const SaveDetails = async (req , res) => {
    // res.send("HEllo")
    try{
        const {userName , userEmail , userSubject , userMessage} = req.body.details
        if(!userName || !userEmail ) return res.status(401).json({success : false , message : "Name and Email are mandatory"})

        const user = new UserModal({
            name : userName,
            email : userEmail,
            subject : userSubject,
            message : userMessage
        })

        await user.save();

        return res.status(200).json({success : true , message : `Mr/Mrs ${userName}, Thank you for considering my portfolio, and I look forward to speaking with you soon. `})

    }catch(error){
        res.status(500).json({success : false , message : error.message})
        console.log(error);
    }
}   