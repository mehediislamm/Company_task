import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";


const Validation = () => {
    const AxiosPublic = useAxiosPublic()
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const userName = form.userName.value;
        const city = form.city.value;
        const state = form.state.value;
        const zip = form.zip.value;
        
        const createData = {
             firstName, lastName, userName, city, state, zip,
        }
        e.target.reset();
        console.log(createData);

        AxiosPublic.post('/', createData)
        .then(res => {
            if (res.data.insertedId) {
                console.log('user added to the data base ');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
   

    return (
        <div>
            <form onSubmit={handleSubmitForm} action="">
                <div>
                    <div className="mb-3">
                        <span>first Name</span>
                        <label className=" input input-bordered flex items-center gap-2">
                            <input name="firstName" required type="text" className=" w-full" />
                        </label>
                    </div>
                    <div className="mb-3">
                        <span>Last name</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <input name="lastName" required type="text" className="grow" />
                        </label>
                    </div>
                    <div className="mb-3">
                        <span>Username</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input name="userName" required type="text" className="grow" />
                        </label>
                    </div>
                    <div className="mb-3">
                        <span>City</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <input name="city" required type="text" className="grow" />
                        </label>
                    </div>
                    <div className="mb-3">
                        <span>State</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <input name="state" required type="text" className="grow" />
                        </label>
                    </div>
                    <div className="mb-3">
                        <span>Zip</span>
                        <label className="input input-bordered flex items-center gap-2">
                            <input name="zip" type="number" className="grow" />
                        </label>
                    </div>
                </div>
                <div>
                <button type="submit" className="w-full btn btn-outline">submit  </button>                </div>
            </form>
        </div>
    );
};

export default Validation;