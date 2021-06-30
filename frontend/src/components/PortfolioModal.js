import React, { Fragment, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import PortfolioForm from "./PortfolioForm";

function PortfolioModal(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

    const create = props.create;
    var title = "Editing Project";
    var button = <Button onClick={toggle}>Edit</Button>;
    if (create) {
        title = "Creating New Project";

        button = (
        <Button
            color="primary"
            className="float-right"
            onClick={toggle}
            style={{ minWidth: "200px" }}
        >
            Create New
        </Button>
        );
    }

    return (
    <Fragment>
    {button}
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>

        <ModalBody>
        <PortfolioForm
            resetState={props.resetState}
            toggle={toggle}
            portfolio={props.portfolio}
        />
        </ModalBody>
    </Modal>
    </Fragment>
    );
}

export default PortfolioModal;