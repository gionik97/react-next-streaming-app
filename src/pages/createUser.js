import Head from "next/head";
import Image from "next/image";
import App from "./_app";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CreateUser() {
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Who Is Watching?</span>
        </div>

        <div className="create-user__form">
          <img
            className="create-user__user-img"
            src="https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3422df4a46d2c81c35bf4687a2fa9c52"
          />
          <div className="create-user__input-group">
            <label>Name</label>
            <input type="text" className="create-user__inputText" />
            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(17,27,176)",
                  background:
                    "linear-gradient(152deg, rgba(17,27,176,1) 0%, rgba(137,14,139,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color"
                style={{
                  background: "rgb(17,27,176)",
                  background:
                    "linear-gradient(152deg, rgba(17,27,176,1) 0%, rgba(196,0,199,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color"
                style={{
                  background: "rgb(255,80,80)",
                  background:
                    "linear-gradient(152deg, rgba(255,80,80,1) 0%, rgba(101,0,157,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color"
                style={{
                  background: "rgb(255,80,80)",
                  background:
                    "linear-gradient(152deg, rgba(255,80,80,1) 0%, rgba(0,76,157,1) 100%)",
                }}
              ></div>
              <div
                className="create-user__color"
                style={{
                  background: "rgb(255,160,80)",
                  background:
                    "linear-gradient(152deg, rgba(255,160,80,1) 0%, rgba(119,0,140,1) 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="create-user__user-buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  );
}
