import axios from "axios";
import { X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function CategoryDeletePage() {
	const navigate = useNavigate();
	const location = useLocation();
	const category = location.state?.category;
	const [isDeleting, setIsDeleting] = useState(false);

	function returnToManagement() {
		navigate("/admin/category/mgt");
	}

	async function handleDelete() {
		if (!category) {
			returnToManagement();
			return;
		}

		setIsDeleting(true);
		try {
			await axios.delete(`/api/categories/${category.id}`);
			navigate("/admin/category/mgt");
		} catch (error) {
			toast.error(error.response?.data?.message || "Unable to delete category.");
		} finally {
			setIsDeleting(false);
		}
	}

	return (
		<main className="flex min-h-screen items-center justify-center bg-black/40 px-4 font-sans">
			<section
				aria-labelledby="delete-category-title"
				className="relative w-full max-w-[257px] rounded-lg bg-white px-10 pb-[22px] pt-8 text-center shadow-sm"
			>
				<button
					aria-label="Close delete category dialog"
					className="absolute right-3 top-3 text-zinc-500 transition-colors hover:text-zinc-900"
					onClick={returnToManagement}
					type="button"
				>
					<X aria-hidden="true" size={13} strokeWidth={1.5} />
				</button>

				<h1 id="delete-category-title" className="text-sm font-semibold text-zinc-800">
					Delete category
				</h1>
				<p className="mt-3 text-[9px] leading-4 text-zinc-500">
					Do you want to delete this category?
				</p>

				<div className="mt-3 flex justify-center gap-1">
					<button
						className="h-[26px] w-[75px] rounded-full border border-zinc-400 text-[9px] font-medium text-zinc-800 transition-colors hover:bg-zinc-100"
						onClick={returnToManagement}
						type="button"
					>
						Cancel
					</button>
					<button
						className="h-[26px] w-[71px] rounded-full bg-[#24211e] text-[9px] font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
						disabled={isDeleting}
						onClick={handleDelete}
						type="button"
					>
						{isDeleting ? "Deleting..." : "Delete"}
					</button>
				</div>
			</section>
		</main>
	);
}
