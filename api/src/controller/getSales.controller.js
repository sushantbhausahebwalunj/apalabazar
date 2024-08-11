import TotalOnlineSales from "../models/total.online.sales.js";

const getTotalOnlineSale = (async (req, res) => {
    const { id } = req.user;
    const cart = await TotalOnlineSales.find();

    if (!cart) {
        return res.status(404).json(new ApiResponse(404, 'sales not found', null));
    }

        return res.status(200).json(new ApiResponse(200, 'fetch sales successfully', cart));

    }
);
export {getTotalOnlineSale}