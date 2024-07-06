import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

export function Header() {
    return <React.Fragment>
        <Col className="container-logo" md={12}>
            <Link href={`https://jefterdev.com/`} target="_blank"><Image width={580} height={122} src="/images/logo.svg" alt="Logo Jefte Dev" /></Link>
        </Col>

        <Col className="contacts" md={12}>
            <Link target="_blank" title="Github" href="https://github.com/jefter-dev">
                <img loading="lazy" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></img>
            </Link>
            <Link target="_blank" title="Linkedin" href="https://www.linkedin.com/in/jefterdev">
                <img loading="lazy" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></img>
            </Link>
            <Link target="_blank" title="Instagram" href="https://instagram.com/jefterdev">
                <img loading="lazy" src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></img>
            </Link>
            <Link target="_blank" href="https://api.whatsapp.com/send?phone=5511981816780" title="WhatsApp">
                <img src="https://img.shields.io/badge/-WhatsApp-25d366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp"></img>
            </Link>
            <Link target="_blank" href="mailto:contato@jefterdev.com">
                <img loading="lazy" src="https://img.shields.io/badge/-EMAIL-58d5d3?style=for-the-badge&logo=maildotru&logoColor=white"></img>
            </Link>
            <Link target="_blank" title="Site" href="http://jefterdev.com/">
                <img loading="lazy" src="https://img.shields.io/badge/-Site-07161b?style=for-the-badge&logo=sitepoint&logoColor=white"></img>
            </Link>
        </Col>
    </ React.Fragment>
}