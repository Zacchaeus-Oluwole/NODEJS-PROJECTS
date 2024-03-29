const pool = require("../../db");
const queries = require('./queries')

const getStudents = (req,res) => {
    pool.query(queries.getStudentsQuery, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudent = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent = (req,res) => {
    const { name, email, age, dob } = req.body;

    // Check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if(results.rows.length){
            res.send("Email already exists");
        }
        // Add student to database
        pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
            if(error) throw error;
            res.status(201).send("Student Created Successfully!");
        })
    });
};

const deletedStudent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deletedStudent, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if (noStudentFound){
            res.send("Student does not exist in the database");
        }
        res.status(200).send("Deleted Successfully");
    });
};

const updateStudent = (req,res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("Student does not exist in the database");
        }
        pool.query(queries.updateStudent, [name,id], (error, results) =>{
            if(error) throw error;
            res.status(200).send("Student updated successfully")
        })
    });

}





module.exports = {
    getStudents,
    getStudent,
    addStudent,
    deletedStudent,
    updateStudent
}