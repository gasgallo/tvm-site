(function() {var implementors = {};
implementors["tvm"] = [{"text":"impl AsRef&lt;ConstIntBoundNode&gt; for ConstIntBoundNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for ConstIntBoundNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BaseAttrsNode&gt; for BaseAttrsNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for BaseAttrsNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;DiagnosticNode&gt; for DiagnosticNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for DiagnosticNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;DiagnosticRendererNode&gt; for DiagnosticRendererNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for DiagnosticRendererNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;DiagnosticContextNode&gt; for DiagnosticContextNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for DiagnosticContextNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BaseExprNode&gt; for BaseExprNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for BaseExprNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PrimExprNode&gt; for PrimExprNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for PrimExprNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BaseExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;GlobalVarNode&gt; for GlobalVarNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for GlobalVarNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BaseFuncNode&gt; for BaseFuncNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for BaseFuncNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;IRModuleNode&gt; for IRModuleNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for IRModuleNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OpNode&gt; for OpNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for OpNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Conv2DAttrsNode&gt; for Conv2DAttrsNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for Conv2DAttrsNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BaseAttrsNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BiasAddAttrsNode&gt; for BiasAddAttrsNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for BiasAddAttrsNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BaseAttrsNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;DenseAttrsNode&gt; for DenseAttrsNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for DenseAttrsNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BaseAttrsNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;GlobalPool2DAttrsNode&gt; for GlobalPool2DAttrsNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for GlobalPool2DAttrsNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BaseAttrsNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;MaxPool2DAttrsNode&gt; for MaxPool2DAttrsNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for MaxPool2DAttrsNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BaseAttrsNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SoftmaxAttrsNode&gt; for SoftmaxAttrsNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for SoftmaxAttrsNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BaseAttrsNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BatchNormAttrsNode&gt; for BatchNormAttrsNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for BatchNormAttrsNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BaseAttrsNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;ExpandDimsAttrsNode&gt; for ExpandDimsAttrsNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for ExpandDimsAttrsNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BaseAttrsNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;ExprNode&gt; for ExprNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for ExprNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BaseExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;IdNode&gt; for IdNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for IdNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;ConstantNode&gt; for ConstantNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for ConstantNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TupleNode&gt; for TupleNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for TupleNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;VarNode&gt; for VarNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for VarNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CallNode&gt; for CallNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for CallNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;LetNode&gt; for LetNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for LetNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;IfNode&gt; for IfNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for IfNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TupleGetItemNode&gt; for TupleGetItemNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for TupleGetItemNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;RefCreateNode&gt; for RefCreateNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for RefCreateNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;RefReadNode&gt; for RefReadNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for RefReadNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;RefWriteNode&gt; for RefWriteNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for RefWriteNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;ConstructorNode&gt; for ConstructorNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for ConstructorNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PatternNode&gt; for PatternNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for PatternNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PatternWildcardNode&gt; for PatternWildcardNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for PatternWildcardNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PatternNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PatternVarNode&gt; for PatternVarNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for PatternVarNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PatternNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PatternConstructorNode&gt; for PatternConstructorNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for PatternConstructorNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PatternNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PatternTupleNode&gt; for PatternTupleNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for PatternTupleNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PatternNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;ClauseNode&gt; for ClauseNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for ClauseNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;MatchNode&gt; for MatchNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for MatchNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;FunctionNode&gt; for FunctionNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for FunctionNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BaseFuncNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SourceNode&gt; for SourceNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for SourceNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SourceMapNode&gt; for SourceMapNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for SourceMapNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SourceNameNode&gt; for SourceNameNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for SourceNameNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SpanNode&gt; for SpanNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for SpanNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;IntImmNode&gt; for IntImmNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for IntImmNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;VarNode&gt; for VarNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for VarNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;AddNode&gt; for AddNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for AddNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SubNode&gt; for SubNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for SubNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;MulNode&gt; for MulNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for MulNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;DivNode&gt; for DivNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for DivNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;ModNode&gt; for ModNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for ModNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;FloorDivNode&gt; for FloorDivNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for FloorDivNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;FloorModNode&gt; for FloorModNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for FloorModNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;MinNode&gt; for MinNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for MinNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;MaxNode&gt; for MaxNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for MaxNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CastNode&gt; for CastNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for CastNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;RampNode&gt; for RampNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for RampNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SelectNode&gt; for SelectNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for SelectNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;EqNode&gt; for EqNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for EqNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;NeNode&gt; for NeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for NeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;LtNode&gt; for LtNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for LtNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;LeNode&gt; for LeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for LeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;GtNode&gt; for GtNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for GtNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;GeNode&gt; for GeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for GeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;AndNode&gt; for AndNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for AndNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OrNode&gt; for OrNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for OrNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;NotNode&gt; for NotNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for NotNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;LetNode&gt; for LetNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for LetNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PrimExprNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TypeNode&gt; for TypeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for TypeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PrimTypeNode&gt; for PrimTypeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for PrimTypeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PointerTypeNode&gt; for PointerTypeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for PointerTypeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TypeVarNode&gt; for TypeVarNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for TypeVarNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;GlobalTypeVarNode&gt; for GlobalTypeVarNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for GlobalTypeVarNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TupleTypeNode&gt; for TupleTypeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for TupleTypeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TypeConstraintNode&gt; for TypeConstraintNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for TypeConstraintNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;FuncTypeNode&gt; for FuncTypeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for FuncTypeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;IncompleteTypeNode&gt; for IncompleteTypeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for IncompleteTypeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;RelayRefTypeNode&gt; for RelayRefTypeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for RelayRefTypeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BaseTensorTypeNode&gt; for BaseTensorTypeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for BaseTensorTypeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TensorTypeNode&gt; for TensorTypeNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for TensorTypeNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TypeDataNode&gt; for TypeDataNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for TypeDataNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TypeNode: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PassInfoNode&gt; for PassInfoNode","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for PassInfoNode <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["tvm_rt"] = [{"text":"impl AsRef&lt;Object&gt; for Object","synthetic":false,"types":[]},{"text":"impl AsRef&lt;StringObj&gt; for StringObj","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for StringObj <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for String","synthetic":false,"types":[]},{"text":"impl AsRef&lt;NDArrayContainer&gt; for NDArrayContainer","synthetic":false,"types":[]},{"text":"impl&lt;O&gt; AsRef&lt;O&gt; for NDArrayContainer <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Object: AsRef&lt;O&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()