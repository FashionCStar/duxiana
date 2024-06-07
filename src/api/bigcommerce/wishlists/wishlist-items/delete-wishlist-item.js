import BigCommerce from "../../../../libs/bigcommerce";

/**
 * @description Deletes a wishlist item.
 * @source https://developer.bigcommerce.com/api-reference/b3A6MzU5MDUzMjk-delete-wishlist-item
 * @returns {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { wishlist_id, item_id } = req.query;

		let endpoint = `/v3/wishlists/${wishlist_id}/items/${item_id}`;

		const result = await BigCommerce({
			endpoint,
			method: "delete"
		});

		res.json(result.data.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
