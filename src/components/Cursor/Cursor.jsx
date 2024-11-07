import React, { useEffect } from 'react';
import './Cursor.css'; // Import CSS for custom cursor

const Cursor = () => {
    useEffect(() => {
        const cursor = {
            delay: 8,
            _x: 0,
            _y: 0,
            endX: window.innerWidth / 2,
            endY: window.innerHeight / 2,
            cursorVisible: true,
            cursorEnlarged: false,
            $dot: document.querySelector(".cursor-dot"),
            $outline: document.querySelector(".cursor-dot-outline"),

            init: function () {
                this.setupEventListeners();
                this.animateDotOutline();
            },

            setupEventListeners: function () {
                var self = this;

                document.addEventListener("mousemove", function (e) {
                    self.cursorVisible = true;
                    self.toggleCursorVisibility();
                    self.endX = e.pageX;
                    self.endY = e.pageY;
                    self.$dot.style.top = self.endY + "px";
                    self.$dot.style.left = self.endX + "px";
                });

                document.addEventListener("mouseenter", function () {
                    self.cursorVisible = true;
                    self.toggleCursorVisibility();
                    self.$dot.style.opacity = 1;
                    self.$outline.style.opacity = 1;
                });

                document.addEventListener("mouseleave", function () {
                    self.cursorVisible = false;
                    self.toggleCursorVisibility();
                });
            },

            animateDotOutline: function () {
                var self = this;
                self._x += (self.endX - self._x) / self.delay;
                self._y += (self.endY - self._y) / self.delay;
                self.$outline.style.top = self._y + "px";
                self.$outline.style.left = self._x + "px";
                requestAnimationFrame(this.animateDotOutline.bind(self));
            },

            toggleCursorVisibility: function () {
                var self = this;
                if (self.cursorVisible) {
                    self.$dot.style.opacity = 1;
                    self.$outline.style.opacity = 1;
                } else {
                    self.$dot.style.opacity = 0;
                    self.$outline.style.opacity = 0;
                }
            },
        };

        cursor.init(); // Initialize the cursor effect
    }, []);

    return (
        <>
            <div className="cursor-dot"></div> {/* Custom cursor dot */}
            <div className="cursor-dot-outline"></div> {/* Custom cursor outline */}
        </>
    );
};

export default Cursor;
