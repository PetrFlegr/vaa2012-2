	  <div class="question ui-body ui-body-{$partner['swatch_question_body']}">	
	    <ul data-role="listview" data-theme="{$partner['swatch_question_body']}">
	      <li class="result-header">Strana <span class="right">Moje shoda</span></li>
	      {foreach $results as $result}
	        <li><a href="../compare/dialog.php?{$query_string}" data-rel="dialog"><img src="../../image/1x1.png" class="party-sprite party-sprite-{$result.friendly_name} ui-li-icon computer" >{if $result.party != ''}{$result.name|truncate:25:"...":true} ({$result.party}){else}{$result.name|truncate:35:"...":true}{/if}
	        <p class="ui-li-aside">
	        <span class="computer result-number
	          {if $result.result >= .6} result-very-positive
	          {elseif $result.result >= .2} result-positive
	          {elseif $result.result >= -.2} result-neutral
	          {elseif $result.result >= -.6} result-negative
	          {else} result-very-negative
	          {/if}	    	    
	        ">{$result.result_percent} %</span>
	        <span class="mobile">{$result.result_percent} %</span>
	       </p>
	        
	        </a></li>
	      {/foreach}
	    </ul>
	  </div>
