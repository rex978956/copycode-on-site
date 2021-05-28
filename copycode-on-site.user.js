// ==UserScript==
// @name        copycode on site
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @require     https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.4.0/clipboard.min.js
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @version     1.1
// @author      bandit
// @description 2021/5/28 下午14:46:33
// @run-at document-start
// ==/UserScript==

document.onreadystatechange = function() {
  if (document.readyState === 'complete') {
    const cssTxt = `.codecopy{overflow:visible}.codecopy,.codecopy .tooltipped{position:relative}.codecopy .tooltipped:after{position:absolute;z-index:1000000;display:none;padding:.5em .75em;font:normal normal 11px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;-webkit-font-smoothing:subpixel-antialiased;color:#fff;text-align:center;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-wrap:break-word;white-space:pre;pointer-events:none;content:attr(aria-label);background:#1b1f23;border-radius:6px;opacity:0}.codecopy .tooltipped:before{position:absolute;z-index:1000001;display:none;width:0;height:0;color:#1b1f23;pointer-events:none;content:"";border:6px solid transparent;opacity:0}@-webkit-keyframes tooltip-appear{0%{opacity:0}to{opacity:1}}@keyframes tooltip-appear{0%{opacity:0}to{opacity:1}}.codecopy .tooltipped:active:after,.codecopy .tooltipped:active:before,.codecopy .tooltipped:focus:after,.codecopy .tooltipped:focus:before,.codecopy .tooltipped:hover:after,.codecopy .tooltipped:hover:before{display:inline-block;text-decoration:none;-webkit-animation-name:tooltip-appear;animation-name:tooltip-appear;-webkit-animation-duration:.1s;animation-duration:.1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-animation-delay:.4s;animation-delay:.4s}.codecopy .tooltipped-no-delay:active:after,.codecopy .tooltipped-no-delay:active:before,.codecopy .tooltipped-no-delay:focus:after,.codecopy .tooltipped-no-delay:focus:before,.codecopy .tooltipped-no-delay:hover:after,.codecopy .tooltipped-no-delay:hover:before{-webkit-animation-delay:0s;animation-delay:0s}.codecopy .tooltipped-multiline:active:after,.codecopy .tooltipped-multiline:focus:after,.codecopy .tooltipped-multiline:hover:after{display:table-cell}.codecopy .tooltipped-s:after,.codecopy .tooltipped-se:after,.codecopy .tooltipped-sw:after{top:100%;right:50%;margin-top:6px}.codecopy .tooltipped-s:before,.codecopy .tooltipped-se:before,.codecopy .tooltipped-sw:before{top:auto;right:50%;bottom:-7px;margin-right:-6px;border-bottom-color:#1b1f23}.codecopy .tooltipped-se:after{right:auto;left:50%;margin-left:-16px}.codecopy .tooltipped-sw:after{margin-right:-16px}.codecopy .tooltipped-n:after,.codecopy .tooltipped-ne:after,.codecopy .tooltipped-nw:after{right:50%;bottom:100%;margin-bottom:6px}.codecopy .tooltipped-n:before,.codecopy .tooltipped-ne:before,.codecopy .tooltipped-nw:before{top:-7px;right:50%;bottom:auto;margin-right:-6px;border-top-color:#1b1f23}.codecopy .tooltipped-ne:after{right:auto;left:50%;margin-left:-16px}.codecopy .tooltipped-nw:after{margin-right:-16px}.codecopy .tooltipped-n:after,.codecopy .tooltipped-s:after{transform:translateX(50%)}.codecopy .tooltipped-w:after{right:100%;bottom:50%;margin-right:6px;transform:translateY(50%)}.codecopy .tooltipped-w:before{top:50%;bottom:50%;left:-7px;margin-top:-6px;border-left-color:#1b1f23}.codecopy .tooltipped-e:after{bottom:50%;left:100%;margin-left:6px;transform:translateY(50%)}.codecopy .tooltipped-e:before{top:50%;right:-7px;bottom:50%;margin-top:-6px;border-right-color:#1b1f23}.codecopy .tooltipped-align-right-1:after,.codecopy .tooltipped-align-right-2:after{right:0;margin-right:0}.codecopy .tooltipped-align-right-1:before{right:10px}.codecopy .tooltipped-align-right-2:before{right:15px}.codecopy .tooltipped-align-left-1:after,.codecopy .tooltipped-align-left-2:after{left:0;margin-left:0}.codecopy .tooltipped-align-left-1:before{left:5px}.codecopy .tooltipped-align-left-2:before{left:10px}.codecopy .tooltipped-multiline:after{width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:250px;word-wrap:break-word;white-space:pre-line;border-collapse:separate}.codecopy .tooltipped-multiline.tooltipped-n:after,.codecopy .tooltipped-multiline.tooltipped-s:after{right:auto;left:50%;transform:translateX(-50%)}.codecopy .tooltipped-multiline.tooltipped-e:after,.codecopy .tooltipped-multiline.tooltipped-w:after{right:100%}@media screen and (min-width:0\0){.codecopy .tooltipped-multiline:after{width:250px}}.codecopy .tooltipped-sticky:after,.codecopy .tooltipped-sticky:before{display:inline-block}.codecopy .tooltipped-sticky.tooltipped-multiline:after{display:table-cell}.codecopy .btn,.codecopy .codecopy-btn{position:relative;display:inline-block;padding:5px 16px;font-size:14px;font-weight:500;line-height:20px;white-space:nowrap;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid;border-radius:6px;-webkit-appearance:none;-moz-appearance:none;appearance:none}.codecopy .btn:hover,.codecopy .codecopy-btn:hover{text-decoration:none}.codecopy .btn.disabled,.codecopy .btn:disabled,.codecopy .btn[aria-disabled=true],.codecopy .codecopy-btn:disabled,.codecopy .codecopy-btn[aria-disabled=true],.codecopy .disabled.codecopy-btn{cursor:default}.codecopy .btn.disabled .octicon,.codecopy .btn:disabled .octicon,.codecopy .btn[aria-disabled=true] .octicon,.codecopy .codecopy-btn:disabled .octicon,.codecopy .codecopy-btn[aria-disabled=true] .octicon,.codecopy .disabled.codecopy-btn .octicon{color:inherit}.codecopy .btn i,.codecopy .codecopy-btn i{font-style:normal;font-weight:500;opacity:.75}.codecopy .btn .octicon,.codecopy .codecopy-btn .octicon{margin-right:4px;color:#6a737d;vertical-align:text-bottom}.codecopy .btn .octicon:only-child,.codecopy .codecopy-btn .octicon:only-child{margin-right:0}.codecopy .btn .Counter,.codecopy .codecopy-btn .Counter{margin-left:2px;color:inherit;text-shadow:none;vertical-align:top;background-color:rgba(27,31,35,.08)}.codecopy .btn .dropdown-caret,.codecopy .codecopy-btn .dropdown-caret{margin-left:4px;opacity:.8}.codecopy .btn,.codecopy .codecopy-btn{color:#24292e;background-color:#fafbfc;border-color:rgba(27,31,35,.15);box-shadow:0 1px 0 rgba(27,31,35,.04),inset 0 1px 0 hsla(0,0%,100%,.25);transition:background-color .2s cubic-bezier(.3,0,.5,1)}.codecopy .btn.hover,.codecopy .btn:hover,.codecopy .codecopy-btn:hover,.codecopy .hover.codecopy-btn,[open]>.codecopy .btn,[open]>.codecopy .codecopy-btn{background-color:#f3f4f6;transition-duration:.1s}.codecopy .btn.selected,.codecopy .btn:active,.codecopy .btn[aria-selected=true],.codecopy .codecopy-btn:active,.codecopy .codecopy-btn[aria-selected=true],.codecopy .selected.codecopy-btn{background-color:#edeff2;box-shadow:inset 0 1px 0 rgba(225,228,232,.2);transition:none}.codecopy .btn.disabled,.codecopy .btn:disabled,.codecopy .btn[aria-disabled=true],.codecopy .codecopy-btn:disabled,.codecopy .codecopy-btn[aria-disabled=true],.codecopy .disabled.codecopy-btn{color:#959da5;background-color:#fafbfc;border-color:rgba(27,31,35,.15)}.codecopy .btn.focus,.codecopy .btn:focus,.codecopy .codecopy-btn:focus,.codecopy .focus.codecopy-btn{outline:1px dotted transparent;outline-offset:2px;box-shadow:0 0 0 3px rgba(3,102,214,.3)}.codecopy .btn-primary{color:#fff;background-color:#2ea44f;border-color:rgba(27,31,35,.15);box-shadow:0 1px 0 rgba(27,31,35,.1),inset 0 1px 0 hsla(0,0%,100%,.03)}.codecopy .btn-primary.hover,.codecopy .btn-primary:hover,[open]>.codecopy .btn-primary{background-color:#2c974b}.codecopy .btn-primary.selected,.codecopy .btn-primary:active,.codecopy .btn-primary[aria-selected=true]{background-color:#2a8f47;box-shadow:inset 0 1px 0 rgba(20,70,32,.2)}.codecopy .btn-primary.disabled,.codecopy .btn-primary:disabled,.codecopy .btn-primary[aria-disabled=true]{color:hsla(0,0%,100%,.8);background-color:#94d3a2;border-color:rgba(27,31,35,.1);box-shadow:0 1px 0 rgba(27,31,35,.1),inset 0 1px 0 hsla(0,0%,100%,.03)}.codecopy .btn-primary.focus,.codecopy .btn-primary:focus{box-shadow:0 0 0 3px rgba(46,164,79,.4)}.codecopy .btn-primary .Counter{color:inherit;background-color:hsla(0,0%,100%,.2)}.codecopy .btn-primary .octicon{color:hsla(0,0%,100%,.8)}.codecopy .btn-danger{color:#cb2431;transition:none}.codecopy .btn-danger:hover,[open]>.codecopy .btn-danger{color:#fff;background-color:#cb2431;border-color:rgba(27,31,35,.15);box-shadow:0 1px 0 rgba(27,31,35,.1),inset 0 1px 0 hsla(0,0%,100%,.03)}.codecopy .btn-danger:hover .Counter,[open]>.codecopy .btn-danger .Counter{background-color:hsla(0,0%,100%,.2)}.codecopy .btn-danger:hover .octicon,[open]>.codecopy .btn-danger .octicon{color:inherit}.codecopy .btn-danger.selected,.codecopy .btn-danger:active,.codecopy .btn-danger[aria-selected=true]{color:#fff;background-color:#be222e;border-color:rgba(27,31,35,.15);box-shadow:inset 0 1px 0 rgba(134,24,29,.2)}.codecopy .btn-danger.disabled,.codecopy .btn-danger:disabled,.codecopy .btn-danger[aria-disabled=true]{color:rgba(203,36,49,.5);background-color:#fafbfc;border-color:rgba(27,31,35,.15);box-shadow:0 1px 0 rgba(27,31,35,.1),inset 0 1px 0 hsla(0,0%,100%,.03),inset 0 1px 0 hsla(0,0%,100%,.25)}.codecopy .btn-danger.disabled .Counter,.codecopy .btn-danger:disabled .Counter,.codecopy .btn-danger[aria-disabled=true] .Counter{background-color:rgba(203,36,49,.05)}.codecopy .btn-danger:focus{box-shadow:0 0 0 3px rgba(203,36,49,.4)}.codecopy .btn-danger .Counter{color:inherit;background-color:rgba(203,36,49,.1)}.codecopy .btn-outline{color:#0366d6;transition:none}.codecopy .btn-outline:hover,[open]>.codecopy .btn-outline{color:#fff;background-color:#0366d6;border-color:rgba(27,31,35,.15);box-shadow:0 1px 0 rgba(27,31,35,.1),inset 0 1px 0 hsla(0,0%,100%,.03)}.codecopy .btn-outline:hover .Counter,[open]>.codecopy .btn-outline .Counter{background-color:hsla(0,0%,100%,.2)}.codecopy .btn-outline:hover .octicon,[open]>.codecopy .btn-outline .octicon{color:inherit}.codecopy .btn-outline.selected,.codecopy .btn-outline:active,.codecopy .btn-outline[aria-selected=true]{color:#fff;background-color:#035fc7;border-color:rgba(27,31,35,.15);box-shadow:inset 0 1px 0 rgba(5,38,76,.2)}.codecopy .btn-outline.disabled,.codecopy .btn-outline:disabled,.codecopy .btn-outline[aria-disabled=true]{color:rgba(3,102,214,.5);background-color:#fafbfc;border-color:rgba(27,31,35,.15);box-shadow:0 1px 0 rgba(27,31,35,.1),inset 0 1px 0 hsla(0,0%,100%,.03),inset 0 1px 0 hsla(0,0%,100%,.25)}.codecopy .btn-outline.disabled .Counter,.codecopy .btn-outline:disabled .Counter,.codecopy .btn-outline[aria-disabled=true] .Counter{background-color:rgba(3,102,214,.05)}.codecopy .btn-outline:focus{box-shadow:0 0 0 3px rgba(3,102,214,.4)}.codecopy .btn-outline .Counter{color:inherit;background-color:rgba(3,102,214,.1)}.codecopy .btn-blue{color:#fff;background-color:#0361cc;background-image:linear-gradient(-180deg,#0679fc,#0361cc 90%)}.codecopy .btn-blue.focus,.codecopy .btn-blue:focus{box-shadow:0 0 0 .2em rgba(6,121,252,.4)}.codecopy .btn-blue.hover,.codecopy .btn-blue:hover{background-color:#035cc2;background-image:linear-gradient(-180deg,#0374f4,#035cc2 90%);background-position:-.5em;border-color:rgba(27,31,35,.5)}.codecopy .btn-blue.selected,.codecopy .btn-blue:active,.codecopy .btn-blue[aria-selected=true],[open]>.codecopy .btn-blue{background-color:#045cc1;background-image:none;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15)}.codecopy .btn-blue.disabled,.codecopy .btn-blue:disabled,.codecopy .btn-blue[aria-disabled=true]{color:hsla(0,0%,100%,.75);background-color:#81b0e5;background-image:none;border-color:rgba(27,31,35,.15);box-shadow:none}.codecopy .btn-blue .Counter{color:#0366d6;background-color:#fff}.codecopy .btn-sm,.codecopy .codecopy-btn{padding:3px 12px;font-size:12px;line-height:20px}.codecopy .btn-sm .octicon,.codecopy .codecopy-btn .octicon{vertical-align:text-top}.codecopy .btn-large{padding:.75em 1.5em;font-size:inherit;line-height:1.5;border-radius:.5em}.codecopy .btn-block{display:block;width:100%;text-align:center}.codecopy .BtnGroup{display:inline-block;vertical-align:middle}.codecopy .BtnGroup:before{display:table;content:""}.codecopy .BtnGroup:after{display:table;clear:both;content:""}.codecopy .BtnGroup+.btn,.codecopy .BtnGroup+.BtnGroup,.codecopy .BtnGroup+.codecopy-btn{margin-left:4px}.codecopy .BtnGroup-item{position:relative;float:left;border-right-width:0;border-radius:0}.codecopy .BtnGroup-item:first-child{border-top-left-radius:6px;border-bottom-left-radius:6px}.codecopy .BtnGroup-item:last-child{border-right-width:1px;border-top-right-radius:6px;border-bottom-right-radius:6px}.codecopy .BtnGroup-item.selected,.codecopy .BtnGroup-item:active,.codecopy .BtnGroup-item:focus,.codecopy .BtnGroup-item:hover,.codecopy .BtnGroup-item[aria-selected=true]{border-right-width:1px}.codecopy .BtnGroup-item.selected+.BtnGroup-item,.codecopy .BtnGroup-item.selected+.BtnGroup-parent .BtnGroup-item,.codecopy .BtnGroup-item:active+.BtnGroup-item,.codecopy .BtnGroup-item:active+.BtnGroup-parent .BtnGroup-item,.codecopy .BtnGroup-item:focus+.BtnGroup-item,.codecopy .BtnGroup-item:focus+.BtnGroup-parent .BtnGroup-item,.codecopy .BtnGroup-item:hover+.BtnGroup-item,.codecopy .BtnGroup-item:hover+.BtnGroup-parent .BtnGroup-item,.codecopy .BtnGroup-item[aria-selected=true]+.BtnGroup-item,.codecopy .BtnGroup-item[aria-selected=true]+.BtnGroup-parent .BtnGroup-item{border-left-width:0}.codecopy .BtnGroup-parent{float:left}.codecopy .BtnGroup-parent:first-child .BtnGroup-item{border-top-left-radius:6px;border-bottom-left-radius:6px}.codecopy .BtnGroup-parent:last-child .BtnGroup-item{border-right-width:1px;border-top-right-radius:6px;border-bottom-right-radius:6px}.codecopy .BtnGroup-parent .BtnGroup-item{border-right-width:0;border-radius:0}.codecopy .BtnGroup-parent.selected .BtnGroup-item,.codecopy .BtnGroup-parent:active .BtnGroup-item,.codecopy .BtnGroup-parent:focus .BtnGroup-item,.codecopy .BtnGroup-parent:hover .BtnGroup-item,.codecopy .BtnGroup-parent[aria-selected=true] .BtnGroup-item{border-right-width:1px}.codecopy .BtnGroup-parent.selected+.BtnGroup-item,.codecopy .BtnGroup-parent.selected+.BtnGroup-parent .BtnGroup-item,.codecopy .BtnGroup-parent:active+.BtnGroup-item,.codecopy .BtnGroup-parent:active+.BtnGroup-parent .BtnGroup-item,.codecopy .BtnGroup-parent:focus+.BtnGroup-item,.codecopy .BtnGroup-parent:focus+.BtnGroup-parent .BtnGroup-item,.codecopy .BtnGroup-parent:hover+.BtnGroup-item,.codecopy .BtnGroup-parent:hover+.BtnGroup-parent .BtnGroup-item,.codecopy .BtnGroup-parent[aria-selected=true]+.BtnGroup-item,.codecopy .BtnGroup-parent[aria-selected=true]+.BtnGroup-parent .BtnGroup-item{border-left-width:0}.codecopy .BtnGroup-item:active,.codecopy .BtnGroup-item:focus,.codecopy .BtnGroup-parent:active,.codecopy .BtnGroup-parent:focus{z-index:1}.codecopy .btn-link{display:inline-block;padding:0;font-size:inherit;color:#0366d6;text-decoration:none;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.codecopy .btn-link:hover{text-decoration:underline}.codecopy .btn-link:disabled,.codecopy .btn-link:disabled:hover,.codecopy .btn-link[aria-disabled=true],.codecopy .btn-link[aria-disabled=true]:hover{color:rgba(88,96,105,.5);cursor:default}.codecopy .btn-invisible{color:#0366d6;background-color:transparent;border:0;border-radius:0;box-shadow:none}.codecopy .btn-invisible.selected,.codecopy .btn-invisible.zeroclipboard-is-active,.codecopy .btn-invisible.zeroclipboard-is-hover,.codecopy .btn-invisible:active,.codecopy .btn-invisible:focus,.codecopy .btn-invisible:hover,.codecopy .btn-invisible[aria-selected=true]{color:#0366d6;background:none;outline:none;box-shadow:none}.codecopy .btn-octicon{display:inline-block;padding:5px;margin-left:5px;line-height:1;color:#586069;vertical-align:middle;background:transparent;border:0}.codecopy .btn-octicon:hover{color:#0366d6}.codecopy .btn-octicon.disabled,.codecopy .btn-octicon[aria-disabled=true]{color:#959da5;cursor:default}.codecopy .btn-octicon.disabled:hover,.codecopy .btn-octicon[aria-disabled=true]:hover{color:#959da5}.codecopy .btn-octicon-danger:hover{color:#cb2431}.codecopy .close-button{padding:0;background:transparent;border:0;outline:none}.codecopy .hidden-text-expander{display:block}.codecopy .hidden-text-expander.inline{position:relative;top:-1px;display:inline-block;margin-left:5px;line-height:0}.codecopy .ellipsis-expander,.codecopy .hidden-text-expander a{display:inline-block;height:12px;padding:0 5px 5px;font-size:12px;font-weight:600;line-height:6px;color:#444d56;text-decoration:none;vertical-align:middle;background:#dfe2e5;border:0;border-radius:1px}.codecopy .ellipsis-expander:hover,.codecopy .hidden-text-expander a:hover{text-decoration:none;background-color:#c6cbd1}.codecopy .ellipsis-expander:active,.codecopy .hidden-text-expander a:active{color:#fff;background-color:#2188ff}.codecopy .btn-with-count{float:left;border-top-right-radius:0;border-bottom-right-radius:0}.codecopy .btn-with-count:focus{z-index:1}.codecopy .social-count{position:relative;float:left;padding:3px 12px;font-size:12px;font-weight:600;line-height:20px;color:#24292e;vertical-align:middle;background-color:#fff;border:1px solid rgba(27,31,35,.15);border-left:0;border-top-right-radius:6px;border-bottom-right-radius:6px;box-shadow:0 1px 0 rgba(27,31,35,.1),inset 0 1px 0 hsla(0,0%,100%,.03),inset 0 1px 0 hsla(0,0%,100%,.25)}.codecopy .social-count:active,.codecopy .social-count:hover{text-decoration:none}.codecopy .social-count:hover{color:#0366d6;cursor:pointer}.codecopy .social-count:focus{z-index:1;outline:0;box-shadow:0 0 0 3px rgba(3,102,214,.3)}.codecopy .codecopy-btn{box-shadow:none;min-height:0;transition:opacity .3s ease-in-out;opacity:0;position:absolute;z-index:1}.codecopy .codecopy-btn .codecopy-btn-icon{border-radius:0;margin-top:-3px;position:relative;top:3px;padding:0;vertical-align:initial;min-height:0}.codecopy .codecopy-btn:focus,.codecopy .codecopy-btn:hover{box-shadow:none}.codecopy:hover .codecopy-btn{opacity:1}.codecopy.codecopy-small .codecopy-btn{padding:2px 6px;right:0;top:0}.codecopy.codecopy-large .codecopy-btn{padding:3px 6px;right:5px;top:5px}.codecopy.codecopy-xlarge .codecopy-btn{padding:3px 6px;right:30px;top:10px}`
    GM_addStyle(cssTxt)

    const htmlButton = `
    <button class="codecopy-btn tooltipped tooltipped-s s-btn" aria-label="Copy to clipboard" type="button">
      <svg height="16" class="codecopy-btn-icon" viewBox="0 0 14 16" version="1.1" width="16" aria-hidden="true">
        <path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path>
      </svg>
    </button>`

    const siteStyle = 'small'

    const snippets = document.querySelectorAll('pre')

    snippets.forEach((snippet) => {
      const parent = snippet.parentNode
      const wrapper = document.createElement('div')

      parent.replaceChild(wrapper, snippet)
      wrapper.appendChild(snippet)

      wrapper.classList.add('codecopy', `codecopy-${siteStyle}`)
      wrapper.firstChild.insertAdjacentHTML('beforebegin', htmlButton)
    })

    // Add copy to clipboard functionality and user feedback

    const clipboard = new Clipboard('.codecopy-btn', {
      target: (trigger) => {
        return trigger.parentNode
      },
    })

    clipboard.on('success', (e) => {
      e.trigger.setAttribute('aria-label', 'Copied!')
      e.clearSelection()
    })

    // Replace tooltip message when mouse leaves button
    // and prevent page refresh after click button

    const btns = document.querySelectorAll('.codecopy-btn')

    btns.forEach((btn) => {
      btn.addEventListener('mouseleave', (e) => {
        e.target.setAttribute('aria-label', 'Copy to clipboard')
        e.target.blur()
      })

      btn.addEventListener('click', (e) => {
        e.preventDefault()
      })
    })
  }
}
