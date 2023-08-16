/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   peerVideo.jsx                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hcabel <hcabel@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/12/05 17:25:13 by hcabel            #+#    #+#             */
/*   Updated: 2021/12/23 16:24:33 by hcabel           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { useEffect, useRef } from "react";
import "./peerVideoCSS.css";

export default function PeerVideo(props) {
  const videoElement = useRef(null);

  ///////////////////////////////////////////////////////////////////////////////
  //	Render

  useEffect(() => {
    console.log(`PeerVideo_${props.index}:\tUseEffect`);
    if (videoElement && videoElement.current) {
      videoElement.current.srcObject = props.stream;
    }
  }, [props.name]);

  console.log(`PeerVideo_${props.index}:\tRefresh`);
  return (
    <div id={`RL-VC-Video-${props.index}`} className="RL-VC-Peer">
      <video
        ref={videoElement}
        id={props.id}
        className={props.mirrored ? "RL-VC-P-Video-Mirrored" : "RL-VC-P-Video"}
        autoPlay
        muted={props.muted}
        onLoadedMetadata={(e) => e.target.play()}
        style={{ display: props.video ? "block" : "none" }}
        webkit-playsinline
        playsInline
        loop
      />
      {props.video ? (
        <div className="RL-VC-P-Name">{props.name}</div>
      ) : (
        <div className="RL-VC-P-NameOverlay">{props.name}</div>
      )}
      {props.handupFlag ? (
        <div className="Hand-up">
          <svg
            className="svg-icon"
            focusable="false"
            width="20"
            height="20"
            // viewBox="0 0 24 24"
            viewBox="0 0 24 24"
          >
            <path
              d="M21,7c0-1.38-1.12-2.5-2.5-2.5c-0.17,0-0.34,0.02-0.5,0.05V4c0-1.38-1.12-2.5-2.5-2.5c-0.23,0-0.46,0.03-0.67,0.09
            C14.46,0.66,13.56,0,12.5,0c-1.23,0-2.25,0.89-2.46,2.06C9.87,2.02,9.69,2,9.5,2C8.12,2,7,3.12,7,4.5v5.89
            c-0.34-0.31-0.76-0.54-1.22-0.66L5.01,9.52c-0.83-0.23-1.7,0.09-2.19,0.83c-0.38,0.57-0.4,1.31-0.15,1.95l2.56,6.43
            C6.49,21.91,9.57,24,13,24h0c4.42,0,8-3.58,8-8V7z M19,16c0,3.31-2.69,6-6,6h0c-2.61,0-4.95-1.59-5.91-4.01l-2.6-6.54l0.53,0.14
            c0.46,0.12,0.83,0.46,1,0.9L7,15h2V4.5C9,4.22,9.22,4,9.5,4S10,4.22,10,4.5V12h2V2.5C12,2.22,12.22,2,12.5,2S13,2.22,13,2.5V12h2V4
            c0-0.28,0.22-0.5,0.5-0.5S16,3.72,16,4v8h2V7c0-0.28,0.22-0.5,0.5-0.5S19,6.72,19,7L19,16z"
            />
          </svg>
          {props.name}
        </div>
      ) : (
        ""
      )}
      {props.audio === false && (
        <div className="RL-VC-P-AudioStatus">
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
            <path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"></path>
            <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path>
          </svg>
        </div>
      )}
    </div>
  );
}
