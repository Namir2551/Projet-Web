import React from "react";
import "./PageFAQ.css";

function Faq() {
    return (
        <div>
            <h1 id="faq">Foire aux questions - FAQ</h1>
            <section id = "sectionFAQ">

                <h3>Est-ce que le stage est obligatoire?</h3>
                <ul>  &gt; Le stage de fin d'études en informatique est obligatoire pour l'obtention du diplôme collégial.</ul>

                <h3>Quel est l'horaire de l'étudiant durant les stages?</h3>
                <ul> &gt; L'étudiant doit respecter l'horaire de l'entreprise durant son stage.</ul>

                <h3>Est-ce que l'étudiant travaille pendant les journées pédagogiques et les journées de rattrapage?</h3>
                <ul> &gt; L'étudiant doit respecter l'horaire de l'entreprise durant son stage et ce même durant les journées pédagogiques et de rattrapage.</ul>

                <h3>Quelle est la durée d'un stage de fin d'études?</h3>
                <ul>&gt; La durée du stage est de 15 semaines pour les deux profils de sortie (réseaux et programmation).</ul>

                <h3>Quelles sont les dates prévues pour les stages?</h3>
                <ul>&gt; Les stages sont prévus du 21 janvier au 3 mai 2019.</ul>

            </section>
        </div>
    );
  }
  
  export default Faq;