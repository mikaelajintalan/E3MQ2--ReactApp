import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { NewToDo, EditToDo } from '../services/toDos';

export const NewToDoModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-success'>Add ToDo</Button>
        <ToDoModal toDo={null} handleFormSubmit={NewToDo} show={show} handleClose={handleClose} />
    </div>
}

export const EditToDoModal = ({ toDo }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>
        <Button onClick={handleShow} className='btn btn-warning'>Edit</Button>
        <ToDoModal toDo={toDo} handleFormSubmit={EditToDo} show={show} handleClose={handleClose} />
    </div>
}

const ToDoModal = ({ toDo, handleFormSubmit, show, handleClose }) => {
    const [modalToDo, setModalToDo] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setModalToDo(toDo);
    }, [toDo]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new todo</Modal.Title>
            </Modal.Header>
            <Form onSubmit={event => {
                event.preventDefault();
                handleFormSubmit(dispatch, modalToDo);
            }}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl value={modalToDo === null ? '' : modalToDo.value}
                            onChange={event => setModalToDo({ ...modalToDo, value: event.target.value })} />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button type='submit' variant="primary" onClick={handleClose}>
                        Save
            </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}