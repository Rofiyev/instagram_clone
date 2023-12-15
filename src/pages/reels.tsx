import Layout from "@/layout";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { FaMusic } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleCheck,
  faHeart,
  faCommentDots,
  faBookmark,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { getReels } from "@/modules/auth/api";
import { IReels } from "@/interface";

export default function Reels(): JSX.Element {
  const [videos, setVideos] = useState<null | IReels[]>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const prevVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await getReels();
      setVideos(data);
      console.log(data);
    })();
  }, []);

  const [liked, setLiked] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [userAddIcon, setUserAddIcon] = useState<null | any>(faCirclePlus);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };
    const handleIntersection = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          videoElement.play();
        } else {
          const videoElement = entry.target;
          videoElement.pause();
        }
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    videoRefs.current.forEach((videoRef) => observer.observe(videoRef));
    return () => observer.disconnect();
  }, [videos]);

  const onVideoPress = (event: React.MouseEvent<HTMLVideoElement>) => {
    const videoElement = event.currentTarget;
    if (videoElement.paused) videoElement.play();
    else videoElement.pause();
  };

  const handleUserAddClick = () => {
    setUserAddIcon(faCircleCheck);
    setTimeout(() => setUserAddIcon(null), 3000);
  };
  const parseLikesCount = (count: any) => {
    if (typeof count === "string") {
      if (count.endsWith("K")) {
        return parseFloat(count) * 1000;
      }
      return parseInt(count);
    }
    return count;
  };

  const formatLikesCount = (count: number) => {
    if (count >= 10000) (count / 1000).toFixed(1) + "K";
    return count;
  };

  const handleLikeClick = () => console.log("Video Liked");

  const handleScroll = () => {
    videoRefs.current.forEach((videoRef: HTMLVideoElement) => {
      const videoPosition = videoRef.getBoundingClientRect().top;
      const isVisible = videoPosition < window.innerHeight && videoPosition > 0;

      if (isVisible && prevVideoRef.current !== videoRef) {
        videoRef.currentTime = 0;
        videoRef.play();
        if (prevVideoRef.current) {
          prevVideoRef.current.pause();
        }
        prevVideoRef.current = videoRef;
      } else if (!isVisible && prevVideoRef.current === videoRef) {
        videoRef.pause();
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Instagram | Reels</title>
      </Head>
      <Layout>
        <main
          style={{
            margin: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "100vh",
              display: "grid",
              placeItems: "center",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "100%",
                minWidth: "70% !important",
                margin: "0 auto",
                objectFit: "cover",
                overflow: "scroll",
                scrollSnapType: "y mandatory",
              }}
              className="wrapper_video"
            >
              {videos &&
                videos.map((video: IReels, i: number) => (
                  <div
                    key={i}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      textShadow: "0 0 4px rgba(0, 0, 0, 0.5)",
                      scrollSnapAlign: "start",
                    }}
                  >
                    <video
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        objectFit: "fill",
                        width: "100%",
                        height: "100%",
                      }}
                      onClick={onVideoPress}
                      ref={(ref: HTMLVideoElement) => {
                        videoRefs.current[i] = ref;
                      }}
                      loop
                      src={video!.media}
                    ></video>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: "30px",
                          marginLeft: "2%",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            color: "white",
                            flexGrow: 1,
                            pointerEvents: "none",
                            display: "flex",
                            marginLeft: "5px",
                          }}
                        >
                          <div style={{ width: "100%" }}>
                            <h3
                              style={{
                                fontSize: "18px",
                                fontWeight: "700",
                                marginBottom: "5px",
                              }}
                            >
                              @{video.username}
                            </h3>
                            <p
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                width: "80%",
                                marginBottom: "10px",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Dolore, nihil suscipit
                              cupiditate nesciunt eum aut, illum sunt at omnis
                              error optio tempore voluptate blanditiis facilis
                              iste, quia excepturi repellat commodi.
                            </p>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                              }}
                              className="ticker"
                            >
                              <FaMusic />
                              <span
                                style={{
                                  fontSize: "12px",
                                  fontWeight: "400",
                                  color: "#fff",
                                }}
                              >
                                Music Name
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ position: "absolute", right: "2%" }}>
                        <div
                          style={{
                            zIndex: "10000",
                            color: "#fff",
                            marginRight: "5px",
                            marginBottom: "25px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              textAlign: "center",
                              marginTop: "5px",
                            }}
                          >
                            <Image
                              width={45}
                              height={45}
                              src={
                                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                              }
                              alt="Profile"
                              style={{
                                color: "#616161",
                                borderRadius: "50%",
                                border: "#fff 2px solid",
                                backgroundColor: "#fff",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                              }}
                            />
                            <FontAwesomeIcon
                              icon={userAddIcon}
                              className="useradd"
                              style={{
                                width: "15px",
                                height: "15px",
                                color: "#FF0000",
                                marginTop: "-10px",
                                cursor: "pointer",
                              }}
                              onClick={handleUserAddClick}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              textAlign: "center",
                              marginTop: "5px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faHeart}
                              style={{
                                width: "35px",
                                height: "35px",
                                color: video.is_liked ? "#FF0000" : "white",
                                cursor: "pointer",
                              }}
                              onClick={handleLikeClick}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              textAlign: "center",
                              marginTop: "5px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faCommentDots}
                              style={{
                                width: "35px",
                                height: "35px",
                                color: "white",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              textAlign: "center",
                              marginTop: "5px",
                            }}
                          >
                            {saved ? (
                              <FontAwesomeIcon
                                icon={faBookmark}
                                style={{
                                  width: "35px",
                                  height: "35px",
                                  color: "#ffc107",
                                  cursor: "pointer",
                                }}
                                onClick={() => setSaved(false)}
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faBookmark}
                                style={{
                                  width: "35px",
                                  height: "35px",
                                  color: "white",
                                  cursor: "pointer",
                                }}
                                onClick={() => setSaved(true)}
                              />
                            )}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              textAlign: "center",
                              marginTop: "5px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faShare}
                              style={{
                                width: "35px",
                                height: "35px",
                                color: "white",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
