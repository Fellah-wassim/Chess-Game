import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import setupChessboardImg from "../assets/howToPlay/setupChessboard.gif";

const HowToPlay = () => {
  const [isIntersecting, setIsIntersecting] = useState([]);
  const elementRefs = useRef([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let elementRefsCurrent = elementRefs.current;
    const observer = new IntersectionObserver((entries) => {
      const newIsIntersecting = entries.reduce(
        (acc, entry, index) => {
          acc[index] = entry.isIntersecting;
          return acc;
        },
        [...isIntersecting]
      );
      setIsIntersecting(newIsIntersecting);
    });

    elementRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementRefsCurrent.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [elementRefs, isIntersecting]);

  return (
    <div className="bg-secondBlack flex justify-center items-center">
      <div className="w-[95%] bg-secondWhite px-6 py-4 sm:px-12 sm:w-[70%] lg:w-[50%]">
        <ul className="documentation-ul flex flex-col gap-12">
          <li>
            <div className="self-start">
              <LinkRouter
                to="/"
                className="nav-btn flex items-center justify-center gap-2 bg-secondBlack p-2 px-4 rounded-md text-white hover:bg-lightenBrown hover:text-secondBlack  duration-300 border-2 border-secondBlack"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="back"
                  className="w-[25px]"
                >
                  <path d="M19,5H9.83a3,3,0,0,0-2.12.88L2.29,11.29a1,1,0,0,0,0,1.42l5.42,5.41A3,3,0,0,0,9.83,19H19a3,3,0,0,0,3-3V8A3,3,0,0,0,19,5Zm1,11a1,1,0,0,1-1,1H9.83a1.05,1.05,0,0,1-.71-.29L4.41,12,9.12,7.29A1.05,1.05,0,0,1,9.83,7H19a1,1,0,0,1,1,1ZM16.71,9.29a1,1,0,0,0-1.42,0L14,10.59l-1.29-1.3a1,1,0,0,0-1.42,1.42L12.59,12l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L14,13.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L15.41,12l1.3-1.29A1,1,0,0,0,16.71,9.29Z"></path>
                </svg>
                <p className="text-xl">Main Menu</p>
              </LinkRouter>
            </div>
            <h1 className="text-4xl text-center font-bold text-white bg-secondBlack px-6 py-3 my-6 rounded-md">
              Learn How to Play Chess
            </h1>
            <p>
              It's never too late to learn how to play chess—the most popular
              game in the world! Learning the rules of chess is easy:
            </p>
            <ol className="links list-decimal list-inside underline">
              <li>
                <Link to="step1">1. Set Up The Chess Board</Link>
              </li>
              <li>
                <Link to="step2">2. Learn To Move The Pieces</Link>
              </li>
              <li>
                <Link to="step3">3. Discover The Special Rules</Link>
              </li>
              <li>
                <Link to="step4">4. Learn Who Makes The First Move</Link>
              </li>
              <li>
                <Link to="step5">5. Check Out The Rules On How To Win</Link>
              </li>
            </ol>
          </li>

          <li id="step1">
            <h1 className="text-4xl">Step 1: Setup The Chess Board</h1>
            <p>
              The chess pieces are then arranged the same way each time. The
              second row (or rank) is filled with pawns. The rooks go in the
              corners, then the knights next to them, followed by the bishops,
              and finally the queen, who always goes on her own matching color
              (white queen on white, black queen on black), and the king on the
              remaining square.
            </p>
            <img
              src={setupChessboardImg}
              alt=""
              className="w-[30%] my-0 mx-auto"
            />
          </li>

          <li id="step2">
            <h1 className="text-4xl">Step 2: How The Chess Pieces Move</h1>
            <p>
              Each of the 6 different kinds of pieces moves differently. Pieces
              cannot move through other pieces (though the knight can jump over
              other pieces), and can never move onto a square with one of their
              own pieces. However, they can be moved to take the place of an
              opponent's piece which is then captured. Pieces are generally
              moved into positions where they can capture other pieces (by
              landing on their square and then replacing them), defend their own
              pieces in case of capture, or control important squares in the
              game.
            </p>
            <div ref={(element) => (elementRefs.current[0] = element)}>
              <p className="text-2xl">How to Move the King in Chess</p>
              <p>
                The king is the most important piece, but is one of the weakest.
                The king can only move one square in any direction - up, down,
                to the sides, and diagonally.
              </p>
              {isIntersecting[0] && (
                <>
                  <iframe
                    display={loading ? "none" : "block"}
                    id="1"
                    src="https://www.youtube.com/embed/ZWjDKiHBvZo?origin=www.youtube.com"
                    title="How to Move the Chess Pieces: The King and the Goal"
                    onLoad={() => setLoading(false)}
                    allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </>
              )}
              <p>
                The king may never move himself into check (where he could be
                captured). When the king is attacked by another piece this is
                called "check".
              </p>
            </div>
            <div ref={(element) => (elementRefs.current[1] = element)}>
              <p className="text-2xl">How to Move the Queen in Chess</p>
              <p ref={(element) => (elementRefs.current[1] = element)}>
                The queen is the most powerful piece. She can move in any one
                straight direction - forward, backward, sideways, or diagonally
                - as far as possible as long as she does not move through any of
                her own pieces.
              </p>
              {isIntersecting[1] && (
                <iframe
                  id="2"
                  src="https://www.youtube.com/embed/vwgwI0wnULU?origin=www.youtube.com"
                  title="The Queen | How to Move the Chess Pieces"
                  allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
              <p>
                And, like with all pieces, if the queen captures an opponent's
                piece her move is over. Notice how the white queen captures the
                black queen and then the black king is forced to move.
              </p>
            </div>
            <div ref={(element) => (elementRefs.current[2] = element)}>
              <p className="text-2xl">How To Move The Rook In Chess</p>
              <p ref={(element) => (elementRefs.current[2] = element)}>
                The rook may move as far as it wants, but only forward,
                backward, and to the sides.
              </p>
              {isIntersecting[2] && (
                <iframe
                  ref={(element) => (elementRefs.current[2] = element)}
                  id="3"
                  src="https://www.youtube.com/embed/PlgnoYqsK-8?origin=www.youtube.com"
                  title="The Rook | How to Move the Chess Pieces #shorts"
                  allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
              <p>
                The rooks are particularly powerful pieces when they are
                protecting each other and working together!
              </p>
            </div>
            <div ref={(element) => (elementRefs.current[3] = element)}>
              <p className="text-2xl">How To Move The Bishop In Chess</p>
              <p ref={(element) => (elementRefs.current[3] = element)}>
                The bishop may move as far as it wants, but only diagonally.
                Each bishop starts on one color (light or dark) and must always
                stay on that color.
              </p>
              {isIntersecting[3] && (
                <iframe
                  ref={(element) => (elementRefs.current[3] = element)}
                  id="4"
                  src="https://www.youtube.com/embed/_y3eA21rD1w?origin=www.youtube.com"
                  title="The Bishop | How to Move the Chess Pieces"
                  allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
              <p>
                Bishops work well together because they cover up each other's
                weaknesses.
              </p>
            </div>
            <div ref={(element) => (elementRefs.current[4] = element)}>
              <p className="text-2xl">How To Move The Knight In Chess</p>
              <p ref={(element) => (elementRefs.current[4] = element)}>
                Knights move in a very different way from the other pieces –
                going two squares in one direction, and then one more move at a
                90-degree angle, just like the shape of an “L”.
              </p>
              {isIntersecting[4] && (
                <iframe
                  ref={(element) => (elementRefs.current[4] = element)}
                  id="5"
                  src="https://www.youtube.com/embed/VGoT8FR0O_8?origin=www.youtube.com"
                  title="The Knight | How to Move the Chess Pieces"
                  allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
              <p>
                Knights are also the only pieces that can move over other
                pieces.
              </p>
            </div>
            <div ref={(element) => (elementRefs.current[5] = element)}>
              <p className="text-2xl">How To Move The Pawn In Chess</p>
              <p ref={(element) => (elementRefs.current[5] = element)}>
                Pawns are unusual because they move and capture in different
                ways: they move forward but capture diagonally. Pawns can only
                move forward one square at a time, except for their very first
                move where they can move forward two squares.
              </p>
              {isIntersecting[5] && (
                <iframe
                  ref={(element) => (elementRefs.current[5] = element)}
                  id="6"
                  src="https://www.youtube.com/embed/00uUlbcPz5E?origin=www.youtube.com"
                  title="The Pawn | How to Move the Chess Pieces"
                  allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
              <p>
                Pawns can only capture one square diagonally in front of them.
                They can never move or capture backward. If there is another
                piece directly in front of a pawn he cannot move past or capture
                that piece.
              </p>
            </div>
          </li>
          <li id="step3">
            <div ref={(element) => (elementRefs.current[6] = element)}>
              <p className="text-4xl">3. How To Do "En Passant" In Chess</p>
              <p ref={(element) => (elementRefs.current[6] = element)}>
                The last rule about pawns is called “en passant,” which is
                French for “in passing”. If a pawn moves out two squares on its
                first move, and by doing so lands to the side of an opponent's
                pawn (effectively jumping past the other pawn's ability to
                capture it), that other pawn has the option of capturing the
                first pawn as it passes by.
              </p>
              {isIntersecting[6] && (
                <iframe
                  ref={(element) => (elementRefs.current[6] = element)}
                  id="7"
                  src="https://www.youtube.com/embed/c_KRIH0wnhE?origin=www.youtube.com"
                  title="En Passant | How to Play Chess"
                  allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
              <p>
                This special move must be done immediately after the first pawn
                has moved past, otherwise the option to capture it is no longer
                available. Click through the example below to better understand
                this odd, but important rule.
              </p>
            </div>
            <div ref={(element) => (elementRefs.current[7] = element)}>
              <p className="text-2xl">How To Move The Pawn In Chess</p>
              <p>
                One other special chess rule is called castling. This move
                allows you to do two important things all in one move: get your
                king to safety (hopefully), and get your rook out of the corner
                and into the game. On a player's turn he may move his king two
                squares over to one side and then move the rook from that side's
                corner to right next to the king on the opposite side. (See the
                example below.) However, in order to castle, the following
                conditions must be met:
              </p>
              <ul className="list-style-circle">
                <li>- it must be that king's very first move</li>
                <li>-it must be that rook's very first move</li>
                <li>
                  -there cannot be any pieces between the king and rook to move
                </li>
                <li>-the king may not be in check or pass through check</li>
              </ul>
              <iframe
                ref={(element) => (elementRefs.current[7] = element)}
                id="8"
                src="https://www.youtube.com/embed/FcLYgXCkucc?origin=www.youtube.com"
                title="Castling | How to Play Chess"
                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p>
                Notice that when you castle one direction the king is closer to
                the side of the board. That is called castling "kingside".
                Castling to the other side, through where the queen sat, is
                called castling "queenside". Regardless of which side, the king
                always moves only two squares when castling.
              </p>
            </div>
          </li>
          <li id="step4">
            <p className="text-4xl">4. Who Makes The First Move In Chess</p>
            <p>
              The player with the white pieces always moves first. Therefore,
              players generally decide who will get to be white by chance or
              luck such as flipping a coin or having one player guess the color
              of the hidden pawn in the other player's hand. White then makes a
              move, followed by black, then white again, then black, and so on
              until the end of the game. Being able to move first is a tiny
              advantage that gives the white player an opportunity to attack
              right away.
            </p>
          </li>
          <li id="step5">
            <div ref={(element) => (elementRefs.current[8] = element)}>
              <p className="text-4xl">
                5. The Rules Of How To Win A Game Of Chess
              </p>
              <p>
                There are several ways to end a game of chess: by checkmate,
                with a draw, by resignation, by forfeit on time...
              </p>
              <p className="text-2xl">How To Checkmate In Chess</p>
              <p>
                The purpose of the game is to checkmate the opponent's king.
                This happens when the king is put into check and cannot get out
                of check.
              </p>
              <iframe
                ref={(element) => (elementRefs.current[8] = element)}
                id="9"
                src="https://www.youtube.com/embed/lBsWZqv5acI?origin=www.youtube.com"
                title="Check | How to Play Chess"
                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p className="text-2xl">
                There are only three ways a king can get out of check:
              </p>
              <ul className="list-style-circle">
                <li>- move out of the way (though he cannot castle!)</li>
                <li>- block the check with another piece. </li>
                <li>- capture the piece threatening the king.</li>
              </ul>
              <iframe
                ref={(element) => (elementRefs.current[9] = element)}
                id="10"
                src="https://www.youtube.com/embed/vjJkdBXVgsk?origin=www.youtube.com"
                title="Getting Out Of Check | How to Play Chess #shorts"
                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p>
                If a king cannot escape checkmate then the game is over.
                Customarily the king is not captured or removed from the board,
                the game is simply declared over.
              </p>
              <iframe
                ref={(element) => (elementRefs.current[10] = element)}
                id="11"
                src="https://www.youtube.com/embed/uu7ISsU-Ufw?origin=www.youtube.com"
                title="Checkmate | How to Play Chess #shorts"
                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p>
                Checkmate can happen in the early stages of the game if one of
                the players does not act carefully. Below, you will find an
                example of the Fools mate, a checkmate that happens in just 2
                moves.{" "}
              </p>
              <iframe
                ref={(element) => (elementRefs.current[12] = element)}
                id="12"
                src="https://www.youtube.com/embed/5qY3aIp4sTw?origin=www.youtube.com"
                title="The Fastest Checkmates in Chess"
                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p className="text-2xl">How To Draw A Chess Game</p>
              <p>
                Occasionally chess games do not end with a winner, but with a
                draw. There are 5 reasons why a chess game may end in a draw:
              </p>
              <p>
                - The position reaches a stalemate where it is one player's turn
                to move, but his king is NOT in check and yet he does not have
                another legal move:
              </p>
              <iframe
                ref={(element) => (elementRefs.current[13] = element)}
                id="13"
                src="https://www.youtube.com/embed/DoGVxiU2VFI?origin=www.youtube.com"
                title="Stalemate | How to Play Chess"
                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p>- The players may simply agree to a draw and stop playing</p>
              <p>
                - There are not enough pieces on the board to force a checkmate
                (example: a king and a bishop vs. a king)
              </p>
              <p>
                - A player declares a draw if the same exact position is
                repeated three times (though not necessarily three times in a
                row)
              </p>
              <p>
                - Fifty consecutive moves have been played where neither player
                has moved a pawn or captured a piece
              </p>
              <iframe
                ref={(element) => (elementRefs.current[14] = element)}
                id="14"
                src="https://www.youtube.com/embed/O8cb34ADUCE?origin=www.youtube.com"
                title="Draws | How to Play Chess"
                allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </li>
          <li>
            <h1 className="text-4xl text-center font-bold text-white bg-secondBlack px-6 py-3 my-6 rounded-md">
              Congrats! You became a chess player!
            </h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowToPlay;
