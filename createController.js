import MyCollection from "../models/myCollection.js";

export const createDocument = async (req, res) => {
    try {
        const document = await MyCollection.create(req.body);
        res.status(201).json({
            message: "Document created",
            data: document
        });
    } catch (error) {
        res.status(400).json({
            message: "Error creating document",
            error: error.message
        });
    }
};
