import React from "react";
import Head from "next/head";
import { Link } from "../helpers/routes";

const Layouts = ({ children }) => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      ></link>
      <link rel="stylesheet" href="/css/style.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap"
        rel="stylesheet"
      ></link>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
      <title>Taufan's Lab</title>
    </Head>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div
            className="row"
            style={{
              minHeight: 220
            }}
          ></div>
          <div
            className="row bg-white"
            style={{
              minHeight: 500
            }}
          >
            <div className="col-md-12 text-center">
              <img
                className="img-avatar"
                src="https://media.gettyimages.com/photos/showing-off-his-pearly-whites-picture-id483627817?s=612x612"
                alt=""
              />
              <p className="text__size_18 text__weight_600 mt-10">
                Taufan Fadhilah Iskandar
              </p>
              <p className="text__size_14">Front End Engineer</p>
              <p className="text__size_14">5 Years Experienced</p>
              <div className="row mt-10" style={{ display: "block" }}>
                <a
                  href="https://www.linkedin.com/in/taufanfadhilahiskandar"
                  target="_blank"
                >
                  <img
                    className="img-social"
                    src="/images/linkedin.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.instagram.com/taufanfadhilah"
                  target="_blank"
                >
                  <img
                    className="img-social"
                    src="/images/instagram.png"
                    alt=""
                  />
                </a>
                <a
                  href="mailto: taufanfadhilahiskandar@gmail.com"
                  target="_blank"
                >
                  <img className="img-social" src="/images/mail.png" alt="" />
                </a>
                <a
                  href="https://medium.com/@taufanfadhilahiskandar"
                  target="_blank"
                >
                  <img className="img-social" src="/images/medium.png" alt="" />
                </a>
              </div>
              <hr />
              <Link route="index">
                <a className="text__black">
                  <p className="mt-10">About Me</p>
                </a>
              </Link>
              <Link route="projects">
                <a className="text__black">
                  <p className="mt-10">Projects</p>
                </a>
              </Link>
              <Link route="blog">
                <a className="text__black">
                  <p className="mt-10">Blog</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-9 p-4">{children}</div>
      </div>
      <style jsx>{`
        .img-avatar {
          max-width: 125px;
          max-height: 125px;
          border-radius: 100px;
          margin-top: -50px;
        }
        .img-social {
          height: 20px;
          margin-left: 5px;
          margin-right: 5px;
        }
      `}</style>
    </div>
  </>
);

export default Layouts;
