/* import React from 'react';
import { toast } from 'react-toastify';

const DeleteProduct = ({deleteOrder, refetch, setDeleteOrder}) => {
  const {toolsName, id} =deleteOrder;
  
  const handleDelete = () => {
		fetch(`https://evening-dawn-30046.herokuapp.com/purchase/${id}`, {
			method: "DELETE",
			headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					toast.success(`${toolsName} deleted`);
					setDeleteOrder(null);
					refetch();
				}
			});
	};
  return (
    <div>
			<input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-red-500">
						Are you sure you want to delete {toolsName}!
					</h3>
					<p className="py-4">
					Once deleted, you will never find it again.!
					</p>
					<div className="modal-action">
						<button
							onClick={() => handleDelete()}
							className="btn btn-error btn-xs"
						>
							Delete
						</button>
						<label for="delete-confirm-modal" className="btn btn-xs">
							Cancel
						</label>
					</div>
				</div>
			</div>
		</div>
  );
};

export default DeleteProduct; */