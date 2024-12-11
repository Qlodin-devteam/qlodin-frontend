const Input = ({ icon:Icon, ...props }) => {

	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='size-5 text-black' />
			</div>
			<input
				{...props}
				className='w-full pl-10 pr-3 py-2 bg-opacity-50 rounded-lg bg-gray-300
				 border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500
				  text-black placeholder-gray-400 transition duration-200'
			/>
		</div>
	);
};
export default Input;