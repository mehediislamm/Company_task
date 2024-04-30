

const BasicElements = () => {
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.text.value;
        const description = form.description.value;
        const password = form.password.value;
        const placeholder = form.placeholder.value;
        const readonly = form.readonly.value;
        const email = form.email.value;
        const color = form.color.value;
        const file = form.file.value;
        const date = form.date.value;
        const month = form.month.value;
        const time = form.time.value;
        const week = form.week.value;
        const number = form.number.value;
        const url = form.url.value;
        const search = form.search.value;
        const tel = form.tel.value;
        const createData = {
            text, description, email, password, placeholder, readonly, color, file, date,
            month, time, week, number, url, search, tel
        }
        e.target.reset();
        console.log(createData);

        // fetch("https://online-group-study.vercel.app/api/v1/create-assignments", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(createData),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         if (data.acknowledged == true) {
        //             swal("Good job!", "Added Producted Successfull", "success");
        //         }
        //     });
    };


    return (
        <div>
            <form onSubmit={handleSubmitForm} action="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div  >
                        {/* text  */}
                        <div className="flex gap-[60px] mb-5">
                            <span className="label-text font-bold  ">
                                Text
                            </span>
                            <input name="text" placeholder="Some text value" required className=" shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="text" id="" />
                        </div>
                        {/* email  */}
                        <div className="flex gap-[53px] mb-5">
                            <span className="label-text  font-bold  ">
                                email
                            </span>
                            <input name="email" placeholder="email" required className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="email" id="" />
                        </div>
                        {/* Password  */}
                        <div className="flex gap-7 mb-5">
                            <span className="label-text font-bold  ">
                                Password
                            </span>
                            <input name="password" placeholder="password" required className=" shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="password" id="" />
                        </div>
                        {/* placeholder  */}
                        <div className="flex gap-3 mb-5">
                            <span className="label-text font-bold  ">
                                Placeholder
                            </span>
                            <input name="placeholder" placeholder="placeholder" required className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="text" id="" />
                        </div>
                        {/* Text area  */}
                        <div className="flex gap-8 mb-5">
                            <span className="label-text font-bold  ">
                                textarea
                            </span>
                            <textarea
                                name="description"
                                className="shadow-md w-full  textarea border-[#F0F0F5]  border-none outline-none"
                                placeholder="Enter blog description"
                                required
                            ></textarea>                    </div>
                        {/* Readonly  */}
                        <div className="flex gap-6 mb-5">
                            <span className="label-text font-bold  ">
                                Readonly
                            </span>
                            <input name="readonly" placeholder="Readonly" required className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="text" id="" />
                        </div>
                        {/* color  */}
                        <div className="flex gap-[53px] mb-5">
                            <span className="label-text font-bold  ">
                                color
                            </span>
                            <input name="color" className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="color" id="" />
                        </div>
                        {/* tel  */}
                        <div className="flex gap-[70px] mb-5">
                            <span className="label-text font-bold  ">
                                tel
                            </span>
                            <input name="tel" placeholder="tel" required className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="tel" id="" />
                        </div>
                    </div>
                    {/* divider  */}
                    {/* input file  */}
                    <div>
                        <div className="flex gap-3 mb-5">
                            <span className="label-text font-bold  ">
                                input file
                            </span>
                            <input name="file" type="file" placeholder="You can't touch this" className="shadow-md h-7 file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        {/* Date  */}
                        <div className="flex gap-8 mb-5">
                            <span className="label-text font-bold  ">
                                date
                            </span>
                            <input name="date" required className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="date" id="" />
                        </div>
                        {/* Month  */}
                        <div className="flex gap-5 mb-5">
                            <span className="label-text font-bold  ">
                                month
                            </span>
                            <input name="month" required className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="month" id="" />
                        </div>
                        {/* time  */}
                        <div className="flex gap-8 mb-5">
                            <span className="label-text font-bold  ">
                                time
                            </span>
                            <input name="time" required className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="time" id="" />
                        </div>
                        {/* week   */}
                        <div className="flex gap-7 mb-5">
                            <span className="label-text font-bold  ">
                                week
                            </span>
                            <input name="week" required className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="week" id="" />
                        </div>
                        {/* number  */}
                        <div className="flex gap-3 mb-5">
                            <span className="label-text font-bold  ">
                                number
                            </span>
                            <input name="number" required className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="number" id="" />
                        </div>
                        {/* url  */}
                        <div className="flex gap-12 mb-5">
                            <span className="label-text font-bold  ">
                                url
                            </span>
                            <input name="url" required className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="url" id="" />
                        </div>
                        {/* search  */}
                        <div className="flex gap-6 mb-5">
                            <span className="label-text font-bold  ">
                                Search
                            </span>
                            <input name="search" required className="shadow-md h-7 border border-[#F0F0F5] w-full outline-none" type="url" id="" />
                        </div>

                    </div>

                </div>
                <div className="flex justify-center">
                    <button type="submit" className="w-full btn btn-outline">submit  </button>
                </div>
            </form>
        </div>
    );
};

export default BasicElements;