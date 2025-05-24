import Customer from "../model/customerModel.js";

const getCustomers = async (req, res) => {
    try {
        console.log("Fetching customers with query:", req.query);
        const {search = "",state,country,page = 1,limit = 10} = req.query;
        const filter = {
            name: {$regex: search, $options: "i"},
            email: {$regex: search, $options: "i"},
            ...state && {state},
            ...country && {country}
        }

        const customer = await Customer.find(filter)
        .skip((page-1)*limit)
        .limit(limit);

        res.status(200).json({
            customers:customer
            ,total: await Customer.countDocuments(filter)
        })

    } catch (error) {
        res.status(500).json({
            message: "Error fetching customers",
            error: error.message
        });
    }
}

export default getCustomers;