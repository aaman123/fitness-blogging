import {
    transition,
    trigger,
    query,
    style,
    animate,
    animation,
    group,
    animateChild,
    keyframes
 } from '@angular/animations';

 const sharedStyles = {
    position: 'fixed',
    overflow: 'hidden',
    width:'100%',
    height:'100%',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
};


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const moveFromRightKeyframes = keyframes([
    style({ transform: 'translateX(100%)', offset: 0, 'z-index': '9999' }),
    style({ transform: 'translateX(0%)', offset: 1 })
]);
/** @type {?} */
const moveToLeftKeyframes = keyframes([
    style({ transform: 'translateX(0%)', offset: 0 }),
    style({ transform: 'translateX(-100%)', opacity: '0', offset: 1 })
]);
/** @type {?} */
const moveFromLeftKeyframes = keyframes([
    style({ transform: 'translateX(-100%)', offset: 0, 'z-index': '9999' }),
    style({ transform: 'translateX(0%)', offset: 1 })
]);
/** @type {?} */
const moveToRightKeyframes = keyframes([
    style({ transform: 'translateX(0%)', offset: 0 }),
    style({ transform: 'translateX(100%)', opacity: '0', offset: 1 })
]);
/** @type {?} */
const moveFromTopKeyframes = keyframes([
    style({ transform: 'translateY(-100%)', offset: 0, 'z-index': '9999' }),
    style({ transform: 'translateY(0%)', offset: 1 })
]);
/** @type {?} */
const moveToBottomKeyframes = keyframes([
    style({ transform: 'translateY(0%)', offset: 0 }),
    style({ transform: 'translateY(100%)', opacity: '0', offset: 1 })
]);
/** @type {?} */
const moveFromBottomKeyframes = keyframes([
    style({ transform: 'translateY(100%)', offset: 0, 'z-index': '9999' }),
    style({ transform: 'translateY(0%)', offset: 1 })
]);
/** @type {?} */
const moveToTopKeyframes = keyframes([
    style({ transform: 'translateY(0%)', offset: 0 }),
    style({ transform: 'translateY(-100%)', opacity: '0', offset: 1 })
]);
/** @type {?} */
const scaleDown = keyframes([
    style({ opacity: '1', transform: 'scale(1)', offset: 0 }),
    style({ opacity: '0', transform: 'scale(0.8)', offset: 1 })
]);
/** @type {?} */
const fadeFrames = keyframes([
    style({ opacity: '1', offset: 0 }),
    style({ opacity: '0.3', offset: 1 })
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


 export const slideInAnimation =
    trigger('routeAnimations', [
         transition('* => trainers', [
             animation([
                query(':enter, :leave', style(sharedStyles), { optional: true }),

                //rotateCubeToLeft

                    group([
                        query(':enter', [
                            style({ 'transform-origin': '0% 50%' }),
                            animate('0.6s 0s ease', keyframes([
                                style({ opacity: '0.3', transform: 'translateX(100%) rotateY(90deg)', offset: 0 }),
                                style({ transform: 'translateX(50%) translateZ(-200px) rotateY(45deg)', offset: 0.5 }),
                                style({ opacity: '1', transform: 'translateX(0%) translateZ(00px) rotateY(0deg)', offset: 1 })
                            ]))
                        ], { optional: true }),
                        query(':leave', [
                            style({ opacity: '1', 'transform-origin': '100% 50%' }),
                            animate('0.6s 0s ease', keyframes([
                                style({ transform: 'translateX(-50%) translateZ(-200px) rotateY(-45deg)', offset: 0.5 }),
                                style({ opacity: '0.3', transform: 'translateX(-100%) rotateY(-90deg)', offset: 1 })
                            ]))
                        ], { optional: true }),
             ])
              ])
         ]),

         transition('* => workouts', [
            animation([
               query(':enter, :leave', style(sharedStyles), { optional: true }),

               //rotateCubeToRight

               group([
                query(':enter', [
                    style({ 'transform-origin': '100% 50%' }),
                    animate('0.6s 0s ease-in', keyframes([
                        style({ opacity: '0.3', transform: 'translateX(-100%) rotateY(-90deg)', offset: 0 }),
                        style({ transform: 'translateX(-50%) translateZ(-200px) rotateY(-45deg)', offset: 0.5 }),
                        style({ opacity: '1', transform: 'translateX(0%) translateZ(00px) rotateY(0deg)', offset: 1 })
                    ]))
                ], { optional: true }),
                query(':leave', [
                    style({ opacity: '1', 'transform-origin': '0% 50%' }),
                    animate('0.6s 0s ease-in', keyframes([
                        style({ transform: 'translateX(50%) translateZ(-200px) rotateY(45deg)', offset: 0.5 }),
                        style({ opacity: '0.3', transform: 'translateX(100%) rotateY(90deg)', offset: 1 })
                    ]))
                ], { optional: true }),
            ])
             ])
        ]),


         transition('* => post1', [
             animation([
                query(':enter, :leave', style(sharedStyles), { optional: true }),

                // slideInFromLeft

                    group([
                        query(':enter', [
                            animate('0.6s 0s ease', moveFromLeftKeyframes)
                        ], { optional: true }),
                        query(':leave', [
                            animate('0.6s 0s ease', moveToRightKeyframes)
                        ], { optional: true }),
                    ])

             ])
                      ]),
         transition('* => post2', [
               animation([
                    query(':enter, :leave', style(sharedStyles), { optional: true }),

                    //movefromright

                    group([
                        query(':enter', [
                            animate('0.6s 0s ease', moveFromRightKeyframes)
                        ], { optional: true }),
                        query(':leave', [
                            animate('0.6s 0s ease', moveToLeftKeyframes)
                        ], { optional: true }),
                    ])
                
               ])
         ]),
         transition('* => post3', [
               animation([
                query(':enter, :leave', style(sharedStyles), { optional: true }),

                //movefromtop

                group([
                    query(':enter', [
                        animate('0.6s 0s ease', moveFromTopKeyframes)
                    ], { optional: true }),
                    query(':leave', [
                        animate('0.6s 0s ease', moveToBottomKeyframes)
                    ], { optional: true }),
                ])
               ])
        ]),

        transition('* => post4', [
            animation([
                query(':enter, :leave', style(sharedStyles), { optional: true }),

                //movefrombottom

                group([
                    query(':enter', [
                        animate('0.6s 0s ease', moveFromBottomKeyframes)
                    ], { optional: true }),
                    query(':leave', [
                        animate('0.6s 0s ease', moveToTopKeyframes)
                    ], { optional: true }),
                ])
            ])
        ]),

        transition('* => post5', [
            animation([

                //movefromleftfade

                query(':enter, :leave', style(sharedStyles), { optional: true }),
                group([
                    query(':enter', [
                        animate('0.6s 0s ease', moveFromLeftKeyframes)
                    ], { optional: true }),
                    query(':leave', [
                        animate('0.7s 0s ease', fadeFrames)
                    ], { optional: true }),
                ])
            ])
        ]),

        transition('* => post6', [
            animation([

                //movefromrightfade

                query(':enter, :leave', style(sharedStyles), { optional: true }),
                group([
                    query(':enter', [
                        animate('0.6s 0s ease', moveFromRightKeyframes)
                    ], { optional: true }),
                    query(':leave', [
                        animate('0.7s 0s ease', fadeFrames)
                    ], { optional: true }),
                ])
            ])
    ])
 ]);
 