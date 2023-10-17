/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      <div className="section-1">
        <div className="box-1">
          <img
            src="/images/graphic-desktop.png"
            alt="img"
            className="image-1"
          />
        </div>
        <div className="box-2">
          <div>
            <h1 className="text-header">ATHLETS</h1>
            <div className="header-subtitle">
              <div className="line">01</div>
              <h3 className="subtitle">CONNECTION</h3>
            </div>
            <p className="paragraph">
              Connect with coaches directly, you can ping coaches to view
              profile.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="box-1"></div>
        <div className="box-2">
          <div>
            <div className="header-subtitle">
              <div className="line">02</div>
              <h3 className="subtitle">COLLABORATION</h3>
            </div>
            <p className="paragraph">
              Connect with coaches directly, you can ping coaches to view
              profile.
            </p>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="box-1"></div>
        <div className="box-2">
          <div>
            <div className="header-subtitle">
              <div className="line">03</div>
              <h3 className="subtitle">GROWTH</h3>
            </div>
            <p className="paragraph">
              Connect with coaches directly, you can ping coaches to view
              profile.
            </p>
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="box-1">
          <div>
            <h1 className="text-header">PLAYERS</h1>
            <div className="header-subtitle">
              <div className="line">01</div>
              <h3 className="subtitle">CONNECTION</h3>
            </div>
            <p className="paragraph">
              Connect with talented athlete directly, you can watch their skills
            </p>
            <p className="">
              through video showreels directly from Surface 1.
            </p>
          </div>
        </div>
        <div className="box-2">
          <img src="/images/graphic-desktop (1).png" className="image-1" />
        </div>
      </div>
      <div className="section-5">
        <div className="box-1">
          <div className="box">
            <div className="header-subtitle">
              <div className="line">02</div>
              <h3 className="subtitle">COLLABORATION</h3>
            </div>
            <p className="paragraph">
              Work with recruiter to increase your chances of finding talented
              athlete.
            </p>
          </div>
        </div>
        <div className="box-2"></div>
      </div>
      <div className="section-6">
        <div className="box-1">
          <div>
            <div className="header-subtitle">
              <div className="line">03</div>
              <h3 className="subtitle">GROWTH</h3>
            </div>
            <p className="paragraph">
              Work with recruiter to increase your chances of finding talented
              athlete.
            </p>
          </div>
        </div>
        <div className="box-2"></div>
      </div>
    </div>
  );
}
