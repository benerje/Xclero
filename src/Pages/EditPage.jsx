import { useFormik } from 'formik'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SkillCard from '../components/SkillCard';
import UserContext from '../Context/UserContext';

function EditPage() {
    const userContextData = useContext(UserContext);
    const navigate = useNavigate()
    let [dob, setDob] = useState()
    let skillRef = useRef()
    let handleSkill = () => {
        userContextData.setSkills([...userContextData.skills, skillRef.current.value])
        skillRef.current.value = ""
    }

    let handleRemove = (skill) => {
        let skillIndex = userContextData.skills.findIndex(e => e === skill);
        userContextData.skills.splice(skillIndex, 1)
        userContextData.setSkills([...userContextData.skills])
    }

    useEffect(() => {
        formik.setValues(userContextData.profile);
    }, []);


    const formik = useFormik({
        initialValues: {
            firstName: "",
            secondName: "",
            email: "",
            age: "",
            dateOfBirth: "",
            country: "",
            gender: "",
            company: "",
            department: "",
            skills: "",
            yearsOfExp: "",
            martial: "",
        },
        validate: (values) => {
            let errors = {};
            if (!values.firstName) {
                errors.firstName = 'Please Enter your first name';
            }
            if (!values.secondName) {
                errors.secondName = 'Please Enter your second name';
            }
            if (!values.company) {
                errors.company = 'Please Enter the company name';
            }
            if (!values.email) {
                errors.email = 'Please Enter your Email Id';
            }
            if (!values.age) {
                errors.age = 'Please Enter your Age';
            }
            if (!values.country) {
                errors.country = 'Please Enter your Country';
            }
            if (!values.gender) {
                errors.gender = 'Please select your gender';
            }
            if (!values.department) {
                errors.department = 'Please select your Department';
            }
            if (!values.yearsOfExp) {
                errors.yearsOfExp = 'Please select your years of experience';
            }
            return errors;
        },
        onSubmit: async (values) => {
            values.skills = userContextData.skills;
            values.dateOfBirth = dob;
            userContextData.setProfile(values);
            navigate('/view')
        }

    })




    return (
        <div className='container'>
            <h2 className="text-center mt-5">Profile Maker</h2>
            <h5>Enter your Details here</h5>
            <form
                className='col'
                onSubmit={formik.handleSubmit}
            >
                <div className='row'>
                    <div className="col-lg-6 d-flex flex-column p-2">
                        <label >
                            First Name *
                        </label>
                        <input
                            type={"text"}
                            name={"firstName"}
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            className="form-control"
                            placeholder="charlie"
                        />
                        {formik.errors.firstName ? (
                            <span style={{ color: 'red' }}>
                                {" "}
                                {formik.errors.firstName}
                            </span>
                        ) : null}
                    </div>
                    <div className="col-lg-6 d-flex flex-column p-2">
                        <label >
                            Second Name *
                        </label>
                        <input
                            type={"text"}
                            name={"secondName"}
                            value={formik.values.secondName}
                            onChange={formik.handleChange}
                            className="form-control"
                            placeholder="Puth"
                        />
                        {formik.errors.secondName ? (
                            <span style={{ color: 'red' }}>
                                {" "}
                                {formik.errors.secondName}
                            </span>
                        ) : null}
                    </div>
                    <div className="col-lg-6 d-flex flex-column p-2">
                        <label >
                            Email*
                        </label>
                        <input
                            type={"email"}
                            name={"email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            className="form-control"
                            placeholder="charlie@asd.fgh"
                        />
                        {formik.errors.email ? (
                            <span style={{ color: 'red' }}>
                                {" "}
                                {formik.errors.email}
                            </span>
                        ) : null}
                    </div>
                    <div className="col-lg-6 d-flex flex-column p-2">
                        <label >
                            Country
                        </label>
                        <input
                            type={"text"}
                            name={"country"}
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            className="form-control"
                            placeholder=""
                        />
                        {formik.errors.country ? (
                            <span style={{ color: 'red' }}>
                                {" "}
                                {formik.errors.country}
                            </span>
                        ) : null}
                    </div>
                    <div className="col-lg-6 d-flex flex-column p-2">
                        <label >
                            Age
                        </label>
                        <input
                            type={"Number"}
                            name={"age"}
                            value={formik.values.age}
                            onChange={formik.handleChange}
                            className="form-control"
                            placeholder=""
                        />
                        {formik.errors.age ? (
                            <span style={{ color: 'red' }}>
                                {" "}
                                {formik.errors.age}
                            </span>
                        ) : null}
                    </div>
                    <div className="col-lg-6 d-flex flex-column p-2">
                        <label >
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            name={"dateOfBirth"}
                            className="form-control"
                            onChange={(e) => setDob(e.target.value)}
                        />
                        {/* {formik.errors.dateOfBirth ? (
                            <span style={{ color: 'red' }}>
                                {" "}
                                {formik.errors.dateOfBirth}
                            </span>
                        ) : null} */}
                    </div>
                    <div className="col-lg-6 d-flex flex-column p-2">
                        <label >
                            Gender
                        </label>
                        <select className='form-control' id="gender" name="gender" onClick={formik.handleChange}>
                            <option id="gender" name="gender">
                            </option>
                            <option id="gender" name="gender" value="Male">
                                Male
                            </option>
                            <option id="gender" name="gender" value="Female">
                                Female
                            </option>
                            <option id="gender" name="gender" value="Other">
                                Other
                            </option>
                        </select>
                        {formik.errors.gender ? <span style={{ color: "red" }}> {formik.errors.gender} </span> : null}
                    </div>
                    <div className="col-lg-6 d-flex flex-column p-2">
                        <label >
                            Martial Status
                        </label>
                        <select className='form-control' id="martial" name="martial" onClick={formik.handleChange}>
                            <option id="martial" name="martial">
                            </option>
                            <option id="martial" name="martial" value="Single">
                                Single
                            </option>
                            <option id="martial" name="martial" value="Married">
                                Married
                            </option>
                            <option id="martial" name="martial" value="Other">
                                Other
                            </option>
                        </select>
                        {formik.errors.martial ? <span style={{ color: "red" }}> {formik.errors.martial} </span> : null}
                    </div>
                    <div className="col-lg-6 d-flex flex-column p-2">
                        <label >
                            Department
                        </label>
                        <input
                            type={"text"}
                            name={"department"}
                            value={formik.values.department}
                            onChange={formik.handleChange}
                            className="form-control"
                            placeholder=""
                        />
                        {formik.errors.department ? (
                            <span style={{ color: 'red' }}>
                                {" "}
                                {formik.errors.department}
                            </span>
                        ) : null}
                    </div>
                    <div className="col-lg-6 d-flex flex-column p-2">
                        <label >
                            Years of Experience
                        </label>
                        <input
                            type={"Number"}
                            name={"yearsOfExp"}
                            value={formik.values.yearsOfExp}
                            onChange={formik.handleChange}
                            className="form-control"
                            placeholder=""
                        />
                        {formik.errors.yearsOfExp ? (
                            <span style={{ color: 'red' }}>
                                {" "}
                                {formik.errors.yearsOfExp}
                            </span>
                        ) : null}
                    </div>
                    <div className="col-lg-6 d-flex flex-column p-2">
                        <label >
                            Company
                        </label>
                        <input
                            type={"text"}
                            name={"company"}
                            value={formik.values.company}
                            onChange={formik.handleChange}
                            className="form-control"
                            placeholder=""
                        />
                        {formik.errors.company ? (
                            <span style={{ color: 'red' }}>
                                {" "}
                                {formik.errors.company}
                            </span>
                        ) : null}
                    </div>
                    <div className="col-lg-7 d-flex flex-wrap p-2">
                        <label className='col-lg-12'>
                            Skills
                        </label>

                        <input
                            type={"text"}
                            name={"skills"}
                            className="form-control mx-2"
                            style={{ width: "90%" }}
                            ref={skillRef}
                        />
                        <button type='button' onClick={handleSkill} className='btn btn-primary'>+</button>
                        <div className='m-2'>
                            {
                                userContextData.skills && userContextData.skills.map((skill) => {
                                    return (
                                        <SkillCard data={skill} handleRemove={handleRemove} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <button type={"submit"} className='btn btn-primary m-2'>Submit</button>
            </form>


        </div>
    )
}

export default EditPage