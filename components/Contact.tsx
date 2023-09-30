import Button from './Button'

const Contact = () => {
    return (
        <section className='w-full flex-1'>
                <h2 className='text-2xl md:text-[40px] text-white mb-10'>Contact</h2>
                <form action="" className='w-full'>
                    <div className='flex flex-col gap-2 w-full'>
                        <input type="text" placeholder='Full Name' className='w-full  md:w-[350px] rounded-[5px] p-2 py-2 md:py-3' />
                        <input type="email" placeholder='Email' className='w-full  md:w-[350px] mt-2 mb-2 rounded-[5px] p-2 py-2 md:py-3' />
                        <textarea placeholder='Email' className='w-full  md:w-[350px] mb-4 h-28 rounded-[5px] pt-2 pl-2 md:pt-3'></textarea>
                        <button type='submit' className='w-full  md:w-[350px]'>
                            <Button variant='tersery'>Submit</Button>
                        </button>
                    </div>
                </form>
        </section>
    )
}

export default Contact