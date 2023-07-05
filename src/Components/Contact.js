import React from 'react'

export default function Contact(props) {
    return (
        <div>
            <div className="container1">
                <form className="form-inline">
                    <label className="sr-only mt-5" style={{ color: props.mode === "dark" ? "White" : "#363738" }} htmlFor="inlineFormInputName2">Name</label>
                    <input type="text" style={{ backgroundColor: props.mode === "dark" ? "#363738" : "White", color: props.mode === "dark" ? "White" : "#363738" }} className="form-control my-2 mr-sm-2 w-50" id="inlineFormInputName2" placeholder="Enter your name" />

                    <label className="sr-only" style={{ color: props.mode === "dark" ? "White" : "#363738" }} htmlFor="inlineFormInputGroupUsername2">Email</label>
                    <div className="input-group mb-2 mr-sm-2 w-50">
                        <div className="input-group-prepend">
                            <div className="input-group-text my-2" style={{ backgroundColor: props.mode === "dark" ? "#363738" : "White", color: props.mode === "dark" ? "White" : "#363738" }}>@</div>
                        </div>
                        <input type="text" className="form-control my-2" style={{ backgroundColor: props.mode === "dark" ? "#363738" : "White", color: props.mode === "dark" ? "White" : "#363738" }} id="inlineFormInputGroupUsername2" placeholder="Enter your email" />
                    </div>

                    <button type="submit" className="btn btn-primary ">Submit</button>
                </form>
            </div>
        </div>
    )
}
